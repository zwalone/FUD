import React from 'react';
import { IngredientListItem } from './IngredientListItem';

export function IngredientsList({ ingredients, setIngredients, checkable }) {
  const setChecked = (i) => {
    console.log(ingredients)
    ingredients[i].checked = !ingredients[i].checked;
    console.log(ingredients)
    setIngredients([...ingredients]);
  };

  if (!checkable && typeof ingredients[0] === "string") {
    ingredients = ingredients.map((ingredient) => {
      return { name: ingredient, checked: false };
    });
  }
  console.log(ingredients);
  return (
    <div style={{ width: '100%' }}>
      {ingredients.map((ingredient, i) => (
        <IngredientListItem
          setChecked={() => {
            setChecked(i);
          }}
          checkable={checkable}
          ingredient={ingredient}
          key={i}
        />
      ))}
    </div>
  );
}
