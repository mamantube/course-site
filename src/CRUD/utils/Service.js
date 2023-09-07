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

const getCourses = () => {
    const result = storageManager.get();
    const response = {
        data: result !== null ? result : [],
    }
    return response;
}

const updateCourse = (courseId, payload) => {
    const listCourses = storageManager.get();
    const updateCourse = listCourses.map((item) => {
        if (item.id === courseId) {
            return {
                ...item,
                ...payload,
            }
        }
        return item
    })

    storageManager.set(updateCourse);
    return {
        data: payload
    }
}

const deleteCourse = (courseId) => {
    const listCourses = storageManager.get();
    const newList = listCourses.filter((item) => item.id !== courseId)

    storageManager.set(newList);
}

const courseService = {
    addCourse,
    getCourses,
    updateCourse,
    deleteCourse,
}

export default courseService;