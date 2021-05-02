import React from 'react';
import './App.css';
import CustomAppBar from './components/CustomAppBar';
import RecipeDetails from './scenes/RecipeDetails';

function App() {

  const recipe = {
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872",
    title: "Mefedron",
    description: "siema elo ale jak tam co tam weź tu i tu i jest git xDD",
    kcal: 123,
    sevings: 2,
    nutrients: [
      {label: "kawa", quantity: 2, unit: "kcal"},
      {label: "kawa", quantity: 2, unit: "kcal"}, 
      {label: "kawa", quantity: 2, unit: "kcal"},
      {label: "kawa", quantity: 2, unit: "kcal"},
      {label: "kawa", quantity: 2, unit: "kcal"},
    ]
  }

  return (
    <div className="App">
      {/* <CustomAppBar search={(output) => console.log(output)}/> */}
      <RecipeDetails
          image={recipe.image}
          title={recipe.title}
          description={recipe.description}
          nutrients={recipe.nutrients}
          kcal={recipe.kcal} 
          sevings={recipe.sevings}
       />
      {/* <p>[Empty Page]</p> */}
      {/* <img alt="test" src="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg"/> */}
    </div>
  );
}

export default App;
