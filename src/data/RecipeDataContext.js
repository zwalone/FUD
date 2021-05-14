import React, { createContext, useEffect, useState } from 'react';
import { downloadRecipes } from './RecipeSearchData';

export const RecipeDataContext = createContext();
export const RecipeDataProvider = ({ children }) => {
    const [phrase, setPhrase] = useState("shrimp"); // SearchView content
    const [recipes, setRecipes] = useState([]);     // list of recipes

    useEffect(() => { 
      downloadRecipes(phrase.length === 0 ? "shrimp" : phrase, 0, 10)
      .then(recipes => setRecipes(recipes))
    }, [phrase]);

    return (
        <RecipeDataContext.Provider value={{ recipes, setPhrase }}>
            {children}
        </RecipeDataContext.Provider>
    );
}