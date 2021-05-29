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
