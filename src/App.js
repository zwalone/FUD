import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import RecipeDetails from './scenes/RecipeDetails'

//to delete after change
import Example from './scenes/example'

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Example} />
          <Route path="/recipeDetail" exact component={RecipeDetails}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
