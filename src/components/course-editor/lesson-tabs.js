import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"
import moduleService from "../../services/module-service";

const LessonTabs = (
    {
        lessons=[],
        findLessonsForModule,
        createLessonForModule,
        deleteLesson=(item) => alert("delete " + item._id),
        updateLesson
    }) => {
    const {layoutId, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        // console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return(
        <div className="container-fluid">
            {/*<h2>Lessons</h2>*/}
            <ul className="nav nav-tabs">
                {
                    lessons.map(lesson =>
                        <li className={`nav-item ${lesson._id === lessonId ? 'active' : ''}`} key={lesson._id}>

                            <EditableItem
                                to={`/courses/${layoutId}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                deleteItem={deleteLesson}
                                updateItem={updateLesson}
                                active={lesson._id === lessonId}
                                item={lesson}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus">
                    </i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons
            }))
    },
    createLessonForModule: (moduleId) => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            lessonService
                .createLessonForModule(moduleId, {title: "New Lesson"})
                .then(lesson => dispatch({
                    type: "CREATE_LESSON",
                    lesson
                }))
        }
        else
            console.log("Select a Module before creating a course")
    },

    deleteLesson: (item) =>
        lessonService.deleteLesson(item._id)
            .then(status => {
                dispatch({
                    type: "DELETE_LESSON",
                    lessonToDelete: item
                })
                dispatch({
                    type: "FIND_TOPICS",
                    topics: []
                })
            }),
    updateLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                lesson
            })),
})

export default connect(stpm, dtpm)(LessonTabs)