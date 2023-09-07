const storageKey = "reactViteJS"

const setItem = (value) => {
    const valueToString = JSON.stringify(value);
    localStorage.setItem(storageKey,valueToString);
}

const getItem = () => {
    const data = localStorage.getItem(storageKey);
    if(data) {
        return JSON.parse(data);
    }
    return null;
}

const storageManager = {
    set: setItem,
    get: getItem,
}

export default storageManager;