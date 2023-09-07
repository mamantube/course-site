import storageManager from "./storageManagement"

const addCourse = (payload) => {
    const currItem = storageManager.get();
    if(currItem !== null) {
        const combineItem = [...currItem, payload]
        storageManager.set(combineItem);
    } else { 
        storageManager.set([payload])
    }

    return {
        data: payload
    }
}

const courseService = {
    addCourse
}

export default courseService;