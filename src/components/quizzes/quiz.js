import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import Question from "./questions/question";
import questionService from '../../services/questions-service'
import quizService from '../../services/quizzes-service'

const Quiz = () => {
    const {quizId, courseId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [quiz, setQuiz] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        quizService.findQuizById(quizId)
            .then((quiz) => {
                setQuiz(quiz)
            })

        questionService.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions))
    },[])


    return(
        <div className='container-fluid'>
            <h3>Quiz</h3>
            <ul className='list-group'>
                {
                    questions.map((question) => {
                        return(
                            <li>
                                <Question
                                    question={question}
                                    questions={questions}
                                    setQuestions={setQuestions}
                                    submitted={submitted}
                                    setSubmitted={setSubmitted}/>
                            </li>
                        )
                    })
                }
            </ul>
            <br/>
            <div className='col text-center'>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        setSubmitted(true);
                        quizService.submitQuiz(quizId, questions)
                    }}>
                    Submit Quiz
                </button>
                {
                submitted &&
                <Link
                    to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}
                    className="btn btn-success btn_name">
                    See Attempts
                </Link>

            }
            </div>
        </div>
    )
}

export default Quiz;