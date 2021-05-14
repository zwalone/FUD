import React, { useState } from 'react';
import './App.css';
import BottomNavigationBar from './components/BottomNavigation';
import { RecipeDataProvider } from './data/RecipeDataContext';
import FavoritePage from './pages/FavoritePage';
import SearchPage from './pages/SearchPage';

export default function App() {
  const [value, setValue] = useState("favorites");
  
  return (
    <RecipeDataProvider>
      <div className="App">
        { value === "search" ? <SearchPage/> : <FavoritePage/> }
        <BottomNavigationBar onChange={(_, newValue) => setValue(newValue)}/>
      </div>
    </RecipeDataProvider>
  );
}
