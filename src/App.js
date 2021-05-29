import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RecipeDetails from './pages/RecipeDetails'
import MainPages from './pages/MainPages'

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/recipeDetails" component={RecipeDetails} />
          <Route path="/" component={MainPages} >
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
