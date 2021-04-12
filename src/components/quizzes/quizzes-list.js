import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizzesService from '../../services/quizzes-service';

const QuizzesList = () => {
    const {courseId, quizId} = useParams()
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizzesService.findAllQuizzes()
            .then(quizzes => setQuizzes(quizzes));
    }, []);
    return(
        <div className='container-fluid'>
            <h2>Quizzes</h2>
            <div className='list-group'>
                {
                    quizzes.map((quiz) => {
                        return(
                            <div className='container-fluid'>
                                <div className='list-group-item'>
                                <li>
                                    <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                        {quiz.title}
                                    </Link>
                                    <Link
                                        to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                        className="float-right btn btn-primary btn-sm">
                                        Start
                                    </Link>
                                </li>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default QuizzesList;