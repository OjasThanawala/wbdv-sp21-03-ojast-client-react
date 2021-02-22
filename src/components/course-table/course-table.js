import React from 'react'
import CourseRow from './course-row';
import {Link} from "react-router-dom";
import "./course-table-style-client.css"

export default class CourseTable
    extends React.Component{
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row wbdv-header-paddin">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">
                                Title
                            </th>
                            <th scope="col" className="d-none d-md-table-cell">
                                Owned By
                                <i className="fa fa-sort-down"></i>
                            </th>
                            <th scope="col" className="d-none d-lg-table-cell">
                                Last Modified
                            </th>

                            <th scope="col" className="float-right">
                                <button type="button" className="btn btn">
                                    <i className="fas fa-folder"></i>
                                </button>
                                <button type="button" className="btn btn">
                                    <i className="fas fa-sort-alpha-down"></i>
                                </button>
                                <Link to="/courses/grid">
                                    <button type="button" className="btn mx-1 btn">
                                        <i className="fas fa-th"></i>
                                    </button>
                                </Link>
                            </th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            this.props.courses.map((course, ndx) =>
                                <CourseRow
                                    updateCourse={this.props.updateCourse}
                                    deleteCourse={this.props.deleteCourse}
                                    key={ndx}
                                    course={course}
                                    title={course.title}
                                    owner={course.owner}
                                    lastModified={course.lastModified}/>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
