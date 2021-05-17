
import React, { useState } from "react";
import {IngredientListItem} from "./IngredientListItem"

export function IngredientsList({ingredients, setIngredients, checkable}) {

    const setChecked = (i) =>{
      let tings = [ ...ingredients ];
      ingredients[i].checked = !ingredients[i].checked;
      console.log(ingredients)
      setIngredients([...ingredients]);
    }
    

  return (
    <div>
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
