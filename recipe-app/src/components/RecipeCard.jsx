import './RecipeCard.css'

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <h3 className="recipe-title">{recipe.title}</h3>
        <span className="recipe-type">{recipe.type}</span>
      </div>
      
      <p className="recipe-description">{recipe.description}</p>
      
      <div className="recipe-meta">
        <span className="recipe-time">⏱️ {recipe.preparationTime} + {recipe.cookingTime}</span>
        <span className="recipe-tools">🛠️ {recipe.tools.join(', ')}</span>
      </div>
      
      <div className="recipe-ingredients">
        <h4>Ingredients</h4>
        <ul>
          {recipe.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>
      </div>
      
      <div className="recipe-preparation">
        <h4>Préparation</h4>
        <p>{recipe.preparation}</p>
      </div>
    </div>
  )
}

export default RecipeCard
