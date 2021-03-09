import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service"
import lessonService from "../../services/lesson-service"
import topicService from "../../services/topic-service"

const ModuleList = (
    {
        myModules=[],
        createModule=() => alert("Create Module 234"),
        deleteModule=(item) => alert("delete " + item._id),
        updateModule,
        findModulesForCourse=(courseId) => console.log(courseId)
    }) => {
    const {layoutId, courseId, moduleId} = useParams();
    useEffect(() => {
        // alert(courseId)
        findModulesForCourse(courseId)
    }, [])
    return(
        <div>
            {/*<h2>Modules</h2>*/}
            <ul className="list-group">
                {
                    myModules.map(module =>
                        <li className={`list-group-item ${module._id === moduleId ?'active' : ''}`} key={module._id}>
                            <EditableItem
                                // to={`/courses/editor/${courseId}/${module._id}`}
                                to={`/courses/${layoutId}/editor/${courseId}/modules/${module._id}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                active={true}
                                item={module}/>
                        </li>
                    )
                }
                <li className="list-group-item">
                    <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x float-left"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}
const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModuleForCourse(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))
        },
        deleteModule: (item) =>
                moduleService.deleteModule(item._id)
                    .then(status => {
                        dispatch({
                            type: "DELETE_MODULE",
                            moduleToDelete: item
                        })
                        dispatch({
                            type: "FIND_LESSONS",
                            lessons: []
                        })
                        dispatch({
                            type: "FIND_TOPICS",
                            topics: []
                        })
                    }),
        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                })),
        findModulesForCourse: (courseId) => {
            return (
            moduleService.findModulesForCourse(courseId)
                .then(theModules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: theModules
                })),
                lessonService.findLessonsForModule(undefined)
                    .then(theLessons => dispatch({
                        type: "FIND_LESSONS_FOR_MODULE",
                        theLessons: undefined
                    })),
                topicService.findTopicsForLessons(undefined)
                    .then(theTopics => dispatch({
                        type: "FIND_TOPICS_FOR_LESSONS",
                        theTopics: undefined
                    }))
            )
        }
    }
}

export default connect(stpm, dtpm)
(ModuleList)