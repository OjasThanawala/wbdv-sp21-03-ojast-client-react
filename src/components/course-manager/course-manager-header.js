import React from "react";
import "./course-manager-style-client.css"
import {Link} from "react-router-dom";

const CourseManagerHeader = ({
    courseTitle,
    addCourse,
    fetchNewCourseTitle
    }) => {
    return(
        <>
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
                               onChange={fetchNewCourseTitle}
                               value={courseTitle}
                               placeholder="New Course"/>
                    </div>
                    <button className="btn btn-lg btn-danger mx-5 rounded-circle" type="button"
                            onClick={addCourse}>
                        <i className="fa fa-plus"></i>
                    </button>

                </div>
            </div>
        </>
    )
}

export default CourseManagerHeader;


