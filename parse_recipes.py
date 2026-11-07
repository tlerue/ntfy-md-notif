#!/usr/bin/env python3
"""
Script pour parser les fichiers de recettes .md et générer un fichier JSON
"""

import os
import json
import re
from pathlib import Path

def parse_recipe_file(filepath):
    """Parse un fichier de recette Markdown"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extraire le titre (première ligne avec #)
    title_match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    title = title_match.group(1) if title_match else "Sans titre"
    
    # Extraire les métadonnées
    data = {
        'title': title,
        'type': '',
        'preparationTime': '',
        'cookingTime': '',
        'description': '',
        'ingredients': [],
        'preparation': '',
        'tools': []
    }
    
    # Type de plat
    type_match = re.search(r'\*\*Type de plat\*\*\s*:\s*(.+)$', content, re.MULTILINE)
    if type_match:
        data['type'] = type_match.group(1).strip()
    
    # Temps
    time_match = re.search(r'\*\*Temps\*\*\s*:\s*(.+)$', content, re.MULTILINE)
    if time_match:
        time_text = time_match.group(1)
        prep_match = re.search(r'prépa\s*\*\*(\d+)\s*min\*\*', time_text)
        cook_match = re.search(r'cuisson\s*\*\*(\d+)\s*min\*\*', time_text)
        data['preparationTime'] = f"{prep_match.group(1)} min" if prep_match else ''
        data['cookingTime'] = f"{cook_match.group(1)} min" if cook_match else ''
    
    # Description
    desc_match = re.search(r'\*\*Description\*\*\s*:\s*(.+?)(?:\n\n|\n##|$)', content, re.DOTALL)
    if desc_match:
        data['description'] = desc_match.group(1).strip()
    
    # Ingrédients
    ingredients_match = re.search(r'## Ingrédients\s*\n(.*?)(?:##|$)', content, re.DOTALL)
    if ingredients_match:
        ingredients_text = ingredients_match.group(1).strip()
        data['ingredients'] = [line.strip('- ').strip() for line in ingredients_text.split('\n') if line.strip().startswith('-')]
    
    # Préparation
    prep_match = re.search(r'## Préparation\s*\n(.*?)(?:##|$)', content, re.DOTALL)
    if prep_match:
        data['preparation'] = prep_match.group(1).strip()
    
    # Outils
    tools_match = re.search(r'\*\*Outils\*\*\s*:\s*(.+)$', content, re.MULTILINE)
    if tools_match:
        tools_text = tools_match.group(1)
        data['tools'] = [t.strip() for t in tools_text.split(',')]
    
    # Générer un ID unique
    filename = Path(filepath).stem
    data['id'] = filename
    
    return data

def main():
    recipes_dir = Path(__file__).parent / 'recettes' / 'llm'
    output_file = Path(__file__).parent / 'recipe-app' / 'src' / 'data' / 'recipes.json'
    
    # Créer le dossier de sortie s'il n'existe pas
    output_file.parent.mkdir(parents=True, exist_ok=True)
    
    recipes = []
    
    # Lire tous les fichiers .md (exclure les rapports)
    md_files = sorted([f for f in recipes_dir.glob('*.md') if f.name.startswith('recette_')])
    
    print(f"Found {len(md_files)} recipe files")
    
    for md_file in md_files:  # Toutes les recettes
        try:
            recipe = parse_recipe_file(md_file)
            recipes.append(recipe)
            print(f"  ✓ {recipe['title']}")
        except Exception as e:
            print(f"  ✗ Error parsing {md_file}: {e}")
    
    # Écrire le JSON
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(recipes, f, ensure_ascii=False, indent=2)
    
    print(f"\nGenerated {output_file} with {len(recipes)} recipes")

if __name__ == '__main__':
    main()
