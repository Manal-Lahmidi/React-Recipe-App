import React from "react";
import "./style.css";

export default function RecipeDisplay({ recipe }) {
  return (
    recipe != null && (
      <div
        className="recipeTile"
        onClick={() => window.open(recipe["url"])}//sets an onClick event handler, which will open the recipe's URL in a new window when the tile is clicked.
      >
        <img className="recipeTile__img" src={recipe["image"]} alt={recipe["label"]} />
        <p className="recipeTile__name">
          {recipe["label"]}
        </p>
      </div>
    )
  );
}
