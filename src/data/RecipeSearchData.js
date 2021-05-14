// This file contains all methods responsible for communicating with EDAMAM's Recipe 
// Search API (documentation: https://developer.edamam.com/edamam-docs-recipe-api)

const appID = 'YOUR_APP_ID';    // INSERT YOUR APP ID HERE
const appKey = 'YOUR_APP_KEY';  // INSERT YOUR APP KEY HERE

// List of recipes:
export const downloadRecipes = (query, from, to) => {
  return fetch(`https://api.edamam.com/search?app_id=${appID}`
    +`&app_key=${appKey}&q=${query}&from=${from}&to=${to}`)
    .then(response => response.json())
    .then(json => prepareCustomJSONs(json.hits))
    .catch(error => console.log(error));
};

// Removing unnecessary data and creating custom objects:
const prepareCustomJSONs = (jsons) => {
  // No recipe has been found:
  if (jsons.length === 0) return "No results";

  // Some recipes have been found:
  return jsons.map(json => ({ 
    label: json.recipe.label,
    image: json.recipe.image,
    calories: Math.round(json.recipe.calories) + " kcal",
    url: json.recipe.url,
    servings: json.recipe.yield + " servings",
    ingredients: json.recipe.ingredientLines,
    nutrients: prepareNutrientsArray(json.recipe.totalNutrients)
  }))
}

// Converting JSON object into array of JSON objects (its keys):
const prepareNutrientsArray = (json) => {
  var result = [];
  for (var key in json)
    result.push({
      label: json[key].label, 
      quantity: Math.round(json[key].quantity * 1000) / 1000,
      unit: json[key].unit
    });
  return result;
}
