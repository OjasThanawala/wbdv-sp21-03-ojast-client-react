import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <>
        <h1>Home</h1>
        <div className="list-group container-fluid">
            <Link to="/courses/table" className="list-group-item">
                Courses Table
            </Link>
            <Link to="/courses/grid" className="list-group-item">
                Courses Grid
            </Link>
            <Link to="/courses/edit" className="list-group-item">
                Course Editor
            </Link>
        </div>
    </>