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

    courseService.findCourseById(courseId)
        .then(status => setCourse(status))

    return (
        <Provider store={store}>
            <div className="container-fluid">
                <h2>
                    <Link to={`/courses/${layoutId}`}>
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    Course Editor - {course.title}
                    <i onClick={() => history.goBack()}
                       className="fas fa-times float-right"></i>
                    {/*<i onClick={() => props.history.goBack()}*/}
                    {/*   className="fas fa-times float-right"></i>*/}
                </h2>
                <div className="row container-fluid">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <div>
                            {/*<LessonTabs courseid={courseId}/>*/}
                            {moduleId && <LessonTabs courseid={courseId} moduleid={moduleId}/>}
                        </div>
                        <div>
                            {lessonId && <TopicPills moduleid={moduleId} lessonid={lessonId}/>}
                        </div>
                    </div>
                </div>
            </div>
        </Provider>)}

export default CourseEditor


// import React from 'react'
// import "./course-editor-style-client.css"
// import {Link} from "react-router-dom";
//
// const CourseEditor = ({history}) => {
//
//     return (
//         <div className="wbdv-sticky-top-dash wbdv-padding-50px">
//             <h1>
//
//                 <i className="pull-left fas fa-arrow-left" style={{color: 'blue'}}
//                    onClick={() => history.goBack()}></i>
//                 Course Editor
//                 <Link to="/courses/table">
//                 <i className="fas fa-times float-right"></i>
//                 </Link>
//             </h1>
//
//             <div className="row">
//                 <div className="col-4">
//
//                     <ul className="list-group">
//                         <li className="list-group-item active">
//                             Module 1
//                             <i className="pull-right fa fa-close"></i>
//                         </li>
//                         <li className="list-group-item">
//                             Module 2
//                             <i className="pull-right fa fa-close"></i>
//                         </li>
//                         <li className="list-group-item">
//                             Module 3
//                             <i className="pull-right fa fa-close"></i>
//                         </li>
//                         <li className="list-group-item">
//                             Module 4
//                             <i className="pull-right fa fa-close"></i>
//                         </li>
//                         <li className="list-group-item">
//                             Module 5
//                             <i className="pull-right fa fa-close"></i>
//                         </li>
//                         <li className="list-group-item">
//                             Module 6
//                             <i className="pull-right fa fa-close"></i>
//                         </li>
//                         <li className="list-group-item">
//                             Module 7
//                             <i className="pull-right fa fa-close"></i>
//                         </li>
//                         <li className="list-group-item">
//                             <i className="pull-right fa fa-plus"></i>
//                         </li>
//                     </ul>
//
//                 </div>
//                 <div className="col-8">
//                     <ul className="nav nav-tabs ">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#">
//                                 Build
//                                 <i className="pull-right fa fa-close"></i>
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link active">
//                                 Pages
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link active" href="#">
//                                 Theme
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link active" href="#">
//                                 Settings
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
//                                 <i className="fa fa-plus"></i>
//                             </a>
//                         </li>
//                     </ul>
//
//                     <br/>
//
//                     <ul className="nav nav-pills">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#">Topic 1</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Topic 2</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Topic 3</a>
//                         </li>
//                         <li className="nav-item col-1">
//                             <i className="fa fa-plus-square fa-2x"></i>
//                         </li>
//                     </ul>
//
//
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default CourseEditor