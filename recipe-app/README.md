# Application de recettes

Cette application React permet de rechercher des recettes par ingrédients et type de plat.

## Fonctionnalités

- 🔍 Recherche par ingrédient
- 🏷️ Filtres par type de plat (soupe, gratin, bowl, plat)
- 🥗 Affichage des ingrédients et temps de préparation
- 📱 Design responsive

## Développement local

```bash
cd recipe-app
npm install
npm run dev
```

L'application sera accessible sur http://localhost:5173/

## Déploiement sur GitHub Pages

```bash
npm run build
```

Puis configurez GitHub Pages pour pointer sur le dossier `dist/`.

## Structure

```
recipe-app/
├── src/
│   ├── components/     # Composants React
│   │   ├── RecipeCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── FilterPanel.jsx
│   ├── data/           # Données JSON des recettes
│   │   └── recipes.json
│   ├── utils/          # Utilitaires
│   │   └── recipes.js
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Source des données

Les recettes sont extraites des fichiers Markdown dans `recettes/llm/` du dépôt principal.
