import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./course-card";

const CourseGrid = ({courses}) =>
    <div>
        <div className="row container-fluid">
            <div className="col-5">
                <h4>Recent Documents</h4>
            </div>
            <div className="col-3 d-none d-lg-block">
                Owned By Me
                <i className="fa fa-sort-down"></i>
            </div>
            <div className="col-3 d-none d-lg-block">
                Last Modified
            </div>
            <div className="col-1">
                <i className="fa fa-th"></i>
                <i className="fa fa-sort-alpha-down "></i>
                <Link to="/courses/table">
                    <button type="button" className="btn btn">
                        <i className="fas fa-th fa-2x"></i>
                    </button>
                </Link>
            </div>

        </div>
        <div className="row">
            {
                courses.map((course, ndx) =>
                    <CourseCard
                        updateCourse={this.props.updateCourse}
                        deleteCourse={this.props.deleteCourse}
                        key={ndx}
                        course={course}
                        title={course.title}
                        owner={course.owner}
                        lastModified={course.lastModified}/>)
            }
        </div>

    </div>

export default CourseGrid