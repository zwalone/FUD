import React from 'react';
import './App.css';
import CustomAppBar from './components/CustomAppBar';
import {IngredientListItem} from './components/IngredientListItem';


function App() {
  return (
    <div className="App">
      <CustomAppBar/>
      <IngredientListItem checked name="shrimps" amount={23} unit={"pcs"} index={0}/>
      <IngredientListItem checked name="shrimps" amount={23} unit={"pcs"} index={1}/>
      <IngredientListItem checked name="shrimps" amount={23} unit={"pcs"} index={3}/>
      <IngredientListItem checked name="shrimps" amount={23} unit={"pcs"} index={4}/>
      <CustomAppBar search={(output) => console.log(output)}/>
      <p>[Empty Page]</p>
    </div>
  );
}

export default App;
