import React from 'react';
import './App.css';
import { RecipeDataProvider } from './data/RecipeDataContext';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import RecipeDetails from './pages/RecipeDetails'
import MainPages from './pages/MainPages'

export default function App() {
  return (
    <RecipeDataProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={MainPages} />
            <Route path="/recipeDetails" exact component={RecipeDetails}/>
          </Switch>
        </div>
      </Router>
    </RecipeDataProvider>
  );
}
