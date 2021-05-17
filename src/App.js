import React, {useState} from 'react';
import './App.css';
import CustomAppBar from './components/CustomAppBar';
import {IngredientsList} from './components/IngredientsList'

  const ingredientsMock = [
  {name: "shrimps", checked: true},
  {name: "shrimps", checked: false},
  {name: "shrimps", checked: true}
]

function App() {
  const [ingredients, setIngredients] = useState(ingredientsMock)

  return (
    <div className="App">
      <CustomAppBar search={(output) => console.log(ingredients)}/>
      <IngredientsList checkable ingredients={ingredients} setIngredients={(ingred) => {setIngredients(ingred); console.log(ingredients)}}/>
      
      <p>[Empty Page]</p>
    </div>
  );
}

export default App;
