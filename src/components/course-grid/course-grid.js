import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import "./course-grid-style-client.css"

const CourseGrid = ({courses, updateCourse, deleteCourse}) =>
    <div className="container-fluid">
        <div className="row wbdv-grid-padding">
            <div className="col-5">
                <h5>Recent Documents</h5>
            </div>
            <div className="col-3 d-none d-lg-block">
                Owned By Me
                <i className="fa fa-sort-down"></i>
            </div>
            <div className="col-4">
                <button type="button" className="btn btn float-right">
                    <i className="fas fa-folder"></i>
                </button>
                <button type="button" className="btn btn float-right">
                    <i className="fas fa-sort-alpha-down"></i>
                </button>
                <Link to="/courses/table">
                    <button type="button" className="btn btn float-right">
                        <i className="fas fa-th fa-2x"></i>
                    </button>
                </Link>
            </div>

            <div className="row">
                {
                    courses.map((course) =>
                        <CourseCard
                            updateCourse={updateCourse}
                            deleteCourse={deleteCourse}
                            key={course._id}
                            course={course}
                            title={course.title}
                            owner={course.owner}
                            lastModified={course.lastModified}/>)
                }
            </div>
        </div>

    </div>

export default CourseGrid