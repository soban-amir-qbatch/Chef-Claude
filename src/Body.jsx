import ClaudeRecipe from './ClaudeRecipe';
import { ClipLoader } from "react-spinners";
import IngredientList from './IngredientList';
import { getRecipeFromMistral } from './ai';
import { useState } from 'react';

const Body = () => {

  const [ingredients, setIngredients] = useState(["Bread","Cheese","Oil","Chicken"]);
  const [recipeShown, setRecipeShown] = useState(false);
  const [recipeContent, setRecipeContent] = useState(null);
  const [loading, setLoading] = useState(false);
 

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  async function handleGetRecipe() {
    setLoading(true);

    const aiResponse = await getRecipeFromMistral(ingredients);
    console.log(aiResponse);
    setRecipeContent(aiResponse);
    
    setLoading(false);
    setRecipeShown(prev => !prev);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0?
        <IngredientList ingredients={ingredients} handleGetRecipe={handleGetRecipe} loading={loading}/>
        :
        <h2>Add ingredients to get started!</h2>
      }

      {recipeShown &&
        <ClaudeRecipe recipeContent={recipeContent} />
      }
    </main>
  )
}

export default Body
