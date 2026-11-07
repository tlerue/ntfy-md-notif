// Import des données JSON depuis le fichier séparé
import recipesDataRaw from '../data/recipes.json'

// Exporter les données
export const recipesData = recipesDataRaw.map(r => ({
  id: r.id,
  title: r.title,
  type: r.type,
  preparationTime: r.preparationTime,
  cookingTime: r.cookingTime,
  description: r.description,
  ingredients: r.ingredients,
  preparation: r.preparation,
  tools: r.tools
}))

// Extraire tous les ingrédients uniques
export function getUniqueIngredients(recipes) {
  const ingredients = new Set()
  recipes.forEach(recipe => {
    recipe.ingredients.forEach(ing => {
      // Extraire le nom de l'ingrédient (avant le prix ou quantité)
      const name = ing.split(/\s*\d+\s*|\s*-\s*/)[0].trim().toLowerCase()
      ingredients.add(name)
    })
  })
  return Array.from(ingredients).sort()
}

// Extraire les types de plat uniques
export function getRecipeTypes(recipes) {
  const types = new Set(recipes.map(r => r.type))
  return Array.from(types).sort()
}

// Rechercher des recettes (pour moteur de recherche interne)
export function searchRecipes(recipes, term) {
  const lowerTerm = term.toLowerCase()
  return recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(lowerTerm) ||
    recipe.description.toLowerCase().includes(lowerTerm) ||
    recipe.ingredients.some(ing => ing.toLowerCase().includes(lowerTerm))
  )
}
