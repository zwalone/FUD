const storage = window.localStorage;

///Gets an object or string for the given key from localStorage
export function getItem(key) {
    var item = storage.getItem(key)
    if (item === null)
        return null;

    //Try parsing, if failed return normal string
    try {
        return JSON.parse(item)
    }
    catch (error) {
        return item;
    }
}

///Sets an object or string for the given key from localStorage
export function setItem(key, item) {
    var serializedItem = item
    if (typeof item !== 'string') {
        serializedItem = JSON.stringify(item) //ASK: throw an exception on failure? 
    }
    storage.setItem(key, serializedItem);
}

export function removeItem(key) {
    storage.removeItem(key)
}




const getAll = () => {
  return getItem("favourites");
};

const get = (uri) => {
  const t = getAll();
  if (!t || !t[uri]) return null;
  return t[uri];
};

const isFav = (uri) => {
        if (!uri){return false}
        return !!get(uri);
      }



const set = (obj) => {
  let favs = getAll() || {};


  obj.ingredients = obj.ingredients.map((ingred) =>
    typeof ingred == "string" ? { name: ingred, checked: false } : ingred
  );
  favs[obj.uri] = obj;
  setItem("favourites", favs);
};


const drop = (uriOrObj) => {
  let favs = getAll();
  (favs);
  if (typeof uriOrObj === "string") {
    delete favs[uriOrObj];
  } else {
    delete favs[uriOrObj.uri];
  }

  setItem("favourites", favs);
};

export const Favourites = {
  getAll: getAll,
  get: get,
  set: set,
  drop: drop,
  isFav: isFav
};