// This file contains method responsible for communicating with EDAMAM's Recipe 
// Search API (documentation: https://developer.edamam.com/edamam-docs-recipe-api)

import { prepareCustomJSONs } from './PreparingJSONs';
import { appKey, appID } from './AppKeys';

// List of recipes:
export const downloadRecipes = (query, from, to) => {
  return fetch(`https://api.edamam.com/search?app_id=${appID}`
    +`&app_key=${appKey}&q=${query}&from=${from}&to=${to}`)
    .then(response => response.json())
    .then(json => prepareCustomJSONs(json.hits))
    .catch(error => console.log(error));
};
