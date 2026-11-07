function FilterPanel({ ingredients, selectedIngredients, onIngredientToggle, recipeTypes, selectedType, onSelectType, onClear }) {
  return (
    <div className="filter-panel">
      {/* Filtre par type */}
      <div className="filter-section">
        <label className="filter-label">Type de plat</label>
        <div className="type-filters">
          <select
            value={selectedType}
            onChange={(e) => onSelectType(e.target.value)}
            className="type-select"
          >
            <option value="">Tous</option>
            {recipeTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Filtre par ingrédients */}
      <div className="filter-section">
        <label className="filter-label">Avec ces ingrédients</label>
        <div className="ingredient-tags">
          {ingredients.slice(0, 20).map(ingredient => (
            <button
              key={ingredient}
              className={`ingredient-tag ${selectedIngredients.includes(ingredient) ? 'active' : ''}`}
              onClick={() => onIngredientToggle(ingredient)}
            >
              {ingredient}
            </button>
          ))}
          {ingredients.length > 20 && (
            <span className="more-indicator">+{ingredients.length - 20} autre(s)</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default FilterPanel
