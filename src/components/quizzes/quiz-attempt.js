import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizzesService from '../../services/quizzes-service';

const QuizAttempts = () => {
    const {courseId, quizId} = useParams()
    const [quizAttempts, setQuizAttempts] = useState([])

    useEffect(() => {
        quizzesService.findAttemptsForQuiz(quizId)
            .then(quizzes => setQuizAttempts(quizzes));
    }, []);
    return(
        <div className='container-fluid'>
            <h2>Quiz Attempts- {quizId}</h2>
            <table className='table'>
                <thead>
                <tr>
                    <th scope='col'>Attempt</th>
                    <th scope='col'>Score</th>
                </tr>
                </thead>
                <tbody>
                {
                    quizAttempts.map((attempt, idx) => {
                        return (
                            <tr>
                            <th scope='row'>{idx+1}</th>
                            <th scope='row'>{attempt.score}</th>
                            </tr>
                    )
                })
                }
                </tbody>
            </table>
        </div>
    );
}

export default QuizAttempts;