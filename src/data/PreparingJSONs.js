// Removing unnecessary data and creating custom objects:
export const prepareCustomJSONs = (jsons) => {
    // No recipe has been found:
    if (jsons.length === 0) return [];

    // Some recipes have been found:
    return jsons.map(json => ({
        uri: json.recipe.uri,
        label: json.recipe.label,
        image: json.recipe.image,
        calories: Math.round(json.recipe.calories) + ' kcal',
        url: json.recipe.url,
        servings: json.recipe.yield + ' servings',
        ingredients: json.recipe.ingredientLines,
        nutrients: prepareNutrientsArray(json.recipe.totalNutrients)
    }));
}

//We need this function because API returns different structure, depending on q or r param
export const prepareCustomJSONsFromID = (jsons) => {
    // No recipe has been found:
    if (jsons.length === 0) return [];

    // Some recipes have been found:
    return jsons.map(json => ({
        uri: json.uri,
        label: json.label,
        image: json.image,
        calories: Math.round(json.calories) + ' kcal',
        url: json.url,
        servings: json.yield + ' servings',
        ingredients: json.ingredientLines,
        nutrients: prepareNutrientsArray(json.totalNutrients)
    }))[0];
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
