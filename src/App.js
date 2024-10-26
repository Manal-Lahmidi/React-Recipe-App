import Axios from "axios";//popular library for making HTTP requests. It will be used to fetch data from the Edamam API.
import { useState } from "react";
import "./app.css";
import RecipeDisplay from "./RecipeDisplay";

function App() {
  const [query, setQuery] = useState("");//query: This state variable will store the user's input for the ingredient they want to search for.
  const [recipes, setRecipes] = useState([]);//recipes: This state variable will store the array of recipe data fetched from the Edamam API.
  const YOUR_APP_ID = `57ddc9f0`;
  const YOUR_APP_KEY = "974729d0581593d0a9f499bc59c94aa1";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  
  const getRecipeInfo = async () => {//This is an asynchronous function that is responsible for making the API request to the Edamam API.
    try {
      const result = await Axios.get(url);//The await keyword pauses the execution of the function until the fetch operation is finished and the response is received.
      setRecipes(result.data.hits);
      console.log("sbsbsbbss",result.data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const onSubmit = (e) => {//This function is triggered when the user submits the search form. It prevents the default form submission behavior and calls the getRecipeInfo function to fetch recipes based on the user's input.
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1>Heaven of Recipes 🍜🥗</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingredient ..."
          autoComplete="Off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}//updates the query state variable with the value entered in the input field.
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>
      

      <div className="app__recipes">
      {recipes.length > 0 &&
          recipes.map((recipe) => {
            return <RecipeDisplay recipe={recipe.recipe} key={recipe.recipe.uri}/>;
          })}
      </div>
    </div>
  );
}

export default App;
