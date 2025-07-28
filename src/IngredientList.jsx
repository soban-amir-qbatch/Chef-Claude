import { GridLoader } from 'react-spinners'

const IngredientList = ({ ingredients, handleGetRecipe, loading }) => {

  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
      {ingredients.length > 3 &&
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={handleGetRecipe}>
            {!loading && "Get a recipe"}
            <GridLoader
              color="white"
              loading={loading}
              size={5}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </button>
        </div>}
    </section>
  )
}

export default IngredientList
