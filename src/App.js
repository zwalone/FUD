import React, { useState, useEffect } from 'react';
import './App.css';
import BottomNavigationBar from './components/BottomNavigation';
import CustomAppBar from './components/CustomAppBar';
import FavoritePage from './pages/FavoritePage';
import SearchPage from './pages/SearchPage';
import { downloadRecipes } from './Data';

export default function App() {
  const [value, setValue] = useState("favorites");
  const [phrase, setPhrase] = useState("shrimp");
  const [recipes, setRecipes] = useState([]);
  useEffect(() => { 
    downloadRecipes(phrase.length === 0 ? "shrimp" : phrase, 0, 10)
    .then(recipes => setRecipes(recipes))
  }, [phrase]);
  
  return (
    <div className="App">
        <CustomAppBar onSearch={output => setPhrase(output)}/>
        { value === "search" ? <SearchPage recipes={recipes}/> : <FavoritePage/> }
        <BottomNavigationBar onChange={(_, newValue) => setValue(newValue)}/>
    </div>
  );
}
