import React, {useState} from 'react'
import {Link} from "react-router-dom";


const CourseRow = (
    {
        course,
        lastModified,
        owner,
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
            title: title
        }
        updateCourse(newCourse)
    }

    return(
        <tr>
            <td>
                {
                    !editing &&
                    <Link to={`/courses/table/edit/${course._id}`}>
                        <i className="fas fa-file"></i>
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
            </td>
            <td className ="d-none d-md-table-cell">
                {
                    !editing && course.owner
                }

            </td>
            <td className ="d-none d-lg-table-cell">
                {
                    !editing && course.lastModified
                }
            </td>
            <td className="mx-auto">
                <Link to= {
                    `/courses/${course._id}/quizzes`
                }>
                    Quizzes
                </Link>
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
        </tr>)
}
export default CourseRow