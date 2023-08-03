import React from "react";
import "./style.css";

export default function RecipeDisplay({ recipe }) {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div
        className="recipeTile"
        onClick={() => window.open(recipe["recipe"]["url"])}//sets an onClick event handler, which will open the recipe's URL in a new window when the tile is clicked.
      >
        <img className="recipeTile__img" src={recipe["recipe"]["image"]} alt={recipe["recipe"]["label"]} />
        <p className="recipeTile__name">
          {recipe["recipe"]["label"]}
        </p>
      </div>
    )
  );
}
