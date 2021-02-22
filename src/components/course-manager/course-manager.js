import React from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import "./course-manager-style-client.css"
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../../services/course-service";

export default class CourseManager
    extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
        // .then(courses => this.setState({courses: courses}))
    }

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
        // alert("delete course " + course._id)
        courseService.deleteCourse(course._id)
            .then(status => {
                // this.setState({
                //   courses: this.state.courses.filter(c => c._id !== course._id)
                // })
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    addCourse = () => {
        // alert('add course')
        const newCourse = {
            title: "New Course",
            owner: "me",
            lastModified: "2/10/2021"
        }
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
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
                            <input className="form-control"/>
                        </div>
                        <button className="btn btn-lg btn-danger mx-5 rounded-circle" type="button"
                                onClick={this.addCourse}
                        >
                            <i className="fa fa-plus"></i>
                        </button>

                    </div>
                </div>
                <br/>

                {/*<Route path="/courses/table" component={CourseTable}/>*/}
                <Route path="/courses/table" exact={true} >
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
                <Route path="/courses/grid" exact={true} >
                    <CourseGrid courses={this.state.courses}/>
                </Route>
                {/*<CourseTable courses={this.state.courses}/>*/}
                {/*<CourseGrid courses={this.state.courses}/>*/}

                <button className="wbdv-add-bottom btn btn-lg btn-danger mx-3 rounded-circle" type="button"
                        onClick={this.addCourse}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        )
    }
}

// export default CourseManager