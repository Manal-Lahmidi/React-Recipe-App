import Axios from "axios";//popular library for making HTTP requests
import { useState } from "react";
import "./app.css";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const YOUR_APP_ID = `57ddc9f0`;
  const YOUR_APP_KEY = "974729d0581593d0a9f499bc59c94aa1";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  
  const getRecipeInfo = async () => {
    try {
      const result = await Axios.get(url);
      setRecipes(result.data.hits);
      console.log(result.data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>Heaven of recipes 🍜🥗</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingredient ..."
          autoComplete="Off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>
      

      <div className="app__recipes">
      {recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} key={recipe.recipe.uri}/>;
          })}
      </div>
    </div>
  );
}

export default App;
