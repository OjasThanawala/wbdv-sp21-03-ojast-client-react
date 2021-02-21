import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";

const CourseManager = () =>
    <div>
    <h1> Course Manager</h1>
    <CourseTable/>
    <CourseGrid/>
    <CourseEditor/>
    </div>

export default CourseManager