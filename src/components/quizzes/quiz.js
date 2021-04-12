import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import questionService from '../../services/questions-service'
import quizService from '../../services/quizzes-service'

const Quiz = () => {
    const {quizId, courseId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [quiz, setQuiz] = useState([]);
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
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Quiz;