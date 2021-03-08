import React, {useState} from 'react'
import {Link} from "react-router-dom";


const CourseCard = (
    {
        course,
        owner,
        lastModified,
        deleteCourse,
        updateCourse
    }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)
    // const [owner, setOwner] = useState(course.owner)
    // const [lastModified, setLastModified] = useState(course.lastModified)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title,
            owner: owner,
            lastModified: lastModified
        }
        updateCourse(newCourse)
    }

    return(
        <div>
            <div className="card" style={{width: "18rem", margin: "15px"}}>
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    {
                        !editing &&
                        <Link to={`/courses/grid/editor/${course._id}`}>
                            <h5 className="card-title">
                                {course.title}
                            </h5>
                        </Link>
                    }
                    {
                        editing &&
                        <input
                            className="form-control"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}/>
                    }

                    <p className="card-text">Some Description.</p>
                    {
                        !editing &&
                        <Link to={`/courses/grid/editor/${course._id}`}>
                            <i className="btn btn-primary">
                                {course.title}
                            </i>
                        </Link>
                    }


                    {
                        editing &&
                        <i onClick={() => deleteCourse(course)}
                           className="fa fa-trash float-right"
                           style={{
                               color: 'red'}}></i>
                    }
                    {
                        editing &&
                        <i onClick={() => saveCourse()}
                           className="fa fa-check float-right"
                           style={{
                               color: 'green'}}></i>
                    }

                    {
                        !editing &&
                        <i onClick={() => setEditing(true)}
                           className="fa fa-edit float-right"></i>
                    }

                </div>
            </div>
        </div>
    )
}
export default CourseCard