import React from 'react';
import './App.css';
import CustomAppBar from './components/CustomAppBar';
import RecipeDetails from './scenes/RecipeDetails';

function App() {

  const recipe = {
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872",
    title: "Egg Breakfast",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu ante, maximus eu dui sit amet, tempus mattis neque. Ut leo elit, gravida non sagittis ac, placerat id nibh. Donec volutpat urna ut laoreet venenatis. Nulla tempor lorem id venenatis maximus. Duis a leo vel neque auctor tincidunt. Donec ac dolor sed enim elementum tristique.",
    kcal: 320,
    sevings: 2,
    nutrients: [
      {label: "Calories", quantity: 320, unit: "kcal"},
      {label: "Protein", quantity: 30, unit: "gl"}, 
      {label: "Fat", quantity: 40, unit: "g"},
      {label: "Sugar", quantity: 85, unit: "g"},
      {label: "Sodium", quantity: 5, unit: "mg"},
      {label: "Carbohydrate ", quantity: 60, unit: "g"},
      {label: "Vitamin A", quantity: 2, unit: "ng"},
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
