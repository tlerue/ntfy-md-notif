import { useState, useEffect } from 'react'
import { searchRecipes, getUniqueIngredients, getRecipeTypes, recipesData } from './utils/recipes'
import RecipeCard from './components/RecipeCard'
import SearchBar from './components/SearchBar'
import FilterPanel from './components/FilterPanel'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [selectedType, setSelectedType] = useState('')
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData)
  const [allIngredients, setAllIngredients] = useState([])
  const [recipeTypes, setRecipeTypes] = useState([])

  // Charger les données une seule fois
  useEffect(() => {
    setAllIngredients(getUniqueIngredients(recipesData))
    setRecipeTypes(getRecipeTypes(recipesData))
  }, [])

  // Filtrer les recettes quand les critères changent
  useEffect(() => {
    let result = recipesData

    // Filtrer par terme de recherche
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(r => 
        r.title.toLowerCase().includes(term) ||
        r.description.toLowerCase().includes(term) ||
        r.ingredients.some(i => i.toLowerCase().includes(term))
      )
    }

    // Filtrer par ingrédients
    if (selectedIngredients.length > 0) {
      result = result.filter(r => 
        selectedIngredients.every(selectedIng => 
          r.ingredients.some(ing => ing.toLowerCase().includes(selectedIng.toLowerCase()))
        )
      )
    }

    // Filtrer par type
    if (selectedType) {
      result = result.filter(r => r.type === selectedType)
    }

    setFilteredRecipes(result)
  }, [searchTerm, selectedIngredients, selectedType])

  const handleIngredientToggle = (ingredient) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredient)
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    )
  }

  const handleClearFilters = () => {
    setSearchTerm('')
    setSelectedIngredients([])
    setSelectedType('')
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🍽️ Recettes du Drivé Tout Nu</h1>
        <p>Recherchez par ingrédients et type de plat</p>
      </header>

      <div className="filters">
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          onClear={handleClearFilters}
        />
        
        <FilterPanel 
          ingredients={allIngredients}
          selectedIngredients={selectedIngredients}
          onIngredientToggle={handleIngredientToggle}
          recipeTypes={recipeTypes}
          selectedType={selectedType}
          onSelectType={setSelectedType}
          onClear={handleClearFilters}
        />
      </div>

      <div className="results-count">
        {filteredRecipes.length} recette{filteredRecipes.length > 1 ? 's' : ''} trouvée{filteredRecipes.length > 1 ? 's' : ''}
      </div>

      <div className="recipe-grid">
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="no-results">
          <p>aucune recette ne correspond à vos critères</p>
          <button onClick={handleClearFilters}>réinitialiser les filtres</button>
        </div>
      )}
    </div>
  )
}

export default App
