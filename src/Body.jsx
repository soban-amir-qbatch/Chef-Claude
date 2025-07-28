import ClaudeRecipe from './ClaudeRecipe';
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IngredientList from './IngredientList';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getRecipeFromMistral } from './ai';
import { useState } from 'react';

const Body = () => {

  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);
  const [recipeContent, setRecipeContent] = useState(null);
  const [loading, setLoading] = useState(false);
 

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    if (newIngredient){
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    else{
      alert("Add a ingredient first!");
    }
  }

  async function handleGetRecipe() {
    setRecipeShown(false)
    setLoading(true);

    const aiResponse = await getRecipeFromMistral(ingredients);
    // console.log(aiResponse);
    setRecipeContent(aiResponse);
    
    setLoading(false);
    setRecipeShown(true);
  }

  function handleDelete(){
    setIngredients([]);
    setRecipeContent(null);
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
        <button className='add-btn'>Add ingredient</button>
        {ingredients.length > 0 && <button type="button" onClick={handleDelete} className='delete-btn'><FontAwesomeIcon icon={faTrash} /></button>}
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
