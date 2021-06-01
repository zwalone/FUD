// This file contains method responsible for communicating with EDAMAM's Recipe 
// Search API (documentation: https://developer.edamam.com/edamam-docs-recipe-api)

import { prepareCustomJSONs, prepareCustomJSONsFromID } from './PreparingJSONs';
import { appKey, appID } from './Settings';

// List of recipes:
export const downloadRecipesQuery = (query, from, to) => {
  return fetch(`https://api.edamam.com/search?app_id=${appID}`
    + `&app_key=${appKey}&q=${query}&from=${from}&to=${to}`)
    .then(response => response.json())
    .then(json => prepareCustomJSONs(json.hits))
    .catch(error => (error));
};


// List of recipes:
export const downloadRecipeByID = (ID) => {
  return fetch(`https://api.edamam.com/search?app_id=${appID}`
    + `&app_key=${appKey}&r=${ID}`)
    .then(response => response.json())
    .then(json => prepareCustomJSONsFromID(json))
    .catch(error => (error));
};
