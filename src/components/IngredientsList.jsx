import React from "react";
import { IngredientListItem } from "./IngredientListItem";

export function IngredientsList({ ingredients, setIngredients, checkable }) {
  const setChecked = (i) => {
    ingredients[i].checked = !ingredients[i].checked;
    setIngredients([...ingredients]);
  };

  if (!checkable) {
    ingredients = ingredients.map((ingredient) => {
      return { name: ingredient, checked: false };
    });
  }

  console.log(ingredients)

  return (
    <div style={{ width: "100%" }}>
      {ingredients.map((ingredient, i) => (
        <IngredientListItem
          setChecked={() => {
            setChecked(i);
            console.log(ingredient);
          }}
          checkable={checkable}
          ingredient={ingredient}
        />
      ))}
    </div>
  );
}
