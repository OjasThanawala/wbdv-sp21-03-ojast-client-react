import React from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import CourseEditor from "../course-editor/course-editor";
import "./course-manager-style-client.css"
import {Link, Route} from "react-router-dom";
import courseService, {updateCourse, deleteCourse} from "../../services/course-service";

export default class CourseManager
    extends React.Component {
    state = {
        courses: [],
        courseTitle: 'New Course'
    }

    fetchNewCourseTitle(course) {
        this.setState({courseTitle: course})
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }

    findCourseById = () => courseService.findCourseById().then(course => course)

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    deleteCourse = (course) => {
        courseService.deleteCourse(course._id)
            .then(status => {
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    addCourse = () => {
        const newCourse = {
            title: this.state.courseTitle,
            owner: "me",
            lastModified: "2/10/2021"
        }
        this.fetchNewCourseTitle('');
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.setState((prevState) => (
                    {...prevState,
                        courses:
                            [...prevState.courses,
                                actualCourse]
                    }))
            })
        this.setState({courseTitle: "New Course"})
    }

    render() {
        return(
            <div>

                <Link to="/">
                    <i className="fas fa-2x fa-home float-right"></i>
                </Link>

                <div className="wbdv-sticky-top-dash wbdv-padding-50px">
                    <div className="row p-3 mb-2 bg-info text-white">
                        <div className="col-1">
                            <i className="fa fa-bars fa-2x"></i>
                        </div>
                        <div className="col-2 d-none d-lg-block">
                            <h4>Course Manager</h4>
                        </div>
                        <div className="col-4">
                            <input className="form-control"
                            onChange={(event) => this.fetchNewCourseTitle(event.target.value)}
                            value={this.state.courseTitle}
                            placeholder="New Course"/>
                        </div>
                        <button className="btn btn-lg btn-danger mx-5 rounded-circle" type="button"
                                onClick={this.addCourse}>
                            <i className="fa fa-plus"></i>
                        </button>

                    </div>
                </div>
                <br/>

                <Route path="/courses/table" exact={true} >
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid" exact={true} >
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>

                <Route path={[
                    "/courses/:layoutId/edit/:courseId",
                    "/courses/:layoutId/edit/:courseId/modules/:moduleId",
                    "/courses/:layoutId/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layoutId/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"]}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>

                <button className="wbdv-add-bottom btn btn-lg btn-danger mx-3 rounded-circle" type="button"
                        onClick={this.addCourse}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        )
    }
}

// export default CourseManager