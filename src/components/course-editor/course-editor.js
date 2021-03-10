import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import courseService from "../../services/course-service";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {layoutId, courseId, moduleId, lessonId} = useParams();
    const [course, setCourse] = useState({});

    useState(() => {
        courseService.findCourseById(courseId)
            .then(
                status => setCourse(status))
    })


    return (
        <Provider store={store}>
            <div className="container-fluid">
                <h2>
                    <Link to={`/courses/${layoutId}`}>
                        <i className="fas fa-times"></i>
                    </Link>
                    {" "}
                    Course Editor - {course.title}
                </h2>
                <div className="row container-fluid">
                    <div className="col-4">
                        {courseId && <ModuleList/>}
                    </div>
                    <div className="col-8">
                        <div className="container-fluid">
                            {/*<LessonTabs courseid={courseId}/>*/}
                            {moduleId && <LessonTabs courseid={courseId} moduleid={moduleId}/>}
                        </div>
                        <div>

                        </div>
                        <div className="container-fluid">
                            {lessonId && <TopicPills moduleid={moduleId} lessonid={lessonId}/>}
                        </div>
                    </div>
                </div>
            </div>
        </Provider>)}

export default CourseEditor