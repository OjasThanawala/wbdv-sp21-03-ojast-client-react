
const url = "https://wbdv-generic-server.herokuapp.com/api/001351475/courses"

export const createCourse = (course) =>
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


export const findAllCourses = () =>
    fetch(url)
        .then(response => response.json())


export const findCourseById = (courseId) =>
    fetch(`${url}/${courseId}`)
        .then(response => response.json())


export const deleteCourse = (courseId) =>
    fetch(`${url}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())


export const updateCourse = (courseId, course) =>
    fetch(`${url}/${courseId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(course)
    })
        .then(response => response.json())

const api = {
    findAllCourses,
    findCourseById,
    deleteCourse: deleteCourse,
    createCourse,
    updateCourse: updateCourse
}

export default api




