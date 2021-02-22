import React, {useState} from 'react'
import {Link} from "react-router-dom";


const CourseCard = (
    {
        course,
        deleteCourse,
        updateCourse
    }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)
    const [owner, setOwner] = useState(course.owner)
    const [lastModified, setLastModified] = useState(course.lastModified)

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
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <Link to="/editor" className="btn btn-primary">
                        Go somewhere
                    </Link>
                </div>
            </div>
            <tr>
                <h5 className="card-title">
                    {
                        !editing &&
                        <Link to="/courses/editor">
                                {course.title}
                        </Link>
                    }
                    {
                        editing &&
                        <input
                            className="form-control"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}/>
                    }
                </h5>
                {/*<td className ="d-none d-md-table-cell">*/}
                <p className="card-text"> Some description </p>
                    {
                        !editing && course.owner
                    }
                    {
                        editing &&
                        <input
                            className="form-control"
                            onChange={(event) => setOwner(event.target.value)}
                            value={owner}/>
                    }
                <td className ="d-none d-lg-table-cell">
                    {
                        !editing && course.lastModified
                    }
                    {
                        editing &&
                        <input
                            onChange={(event) => setLastModified(event.target.value)}
                            value={lastModified}
                            className="form-control"/>
                    }
                </td>
                <td>
                    <i onClick={() => deleteCourse(course)} className="fas fa-trash float-right"></i>
                    {
                        editing &&
                        <i onClick={() => saveCourse()} className="fas fa-check float-right"></i>
                    }

                    {
                        !editing &&
                        <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>
                    }


                </td>
            </tr>
        </div>
    )
}
export default CourseCard