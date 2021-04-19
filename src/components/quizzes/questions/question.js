import React, {useState} from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";
import './question.style.client.css'
import quizService from '../../../services/quizzes-service'

const Question = ({question,questions, setQuestions, quizId}) => {
    const [answer, setAnswer] = useState('')
    const [graded, setGraded] = useState(false)

    const toggleAnswer = (ans) => {
        setGraded(false);
        setAnswer(ans)
    }

    return(
        <div className='container-fluid'>
            <h4>
                {question.question}
                <span>
                    {
                        graded && question.correct === answer &&
                        <i className="fas fa-check check-green"></i>
                    }
                    {
                        graded && question.correct !== answer &&
                        <i className="fas fa-times times-red"></i>
                    }
                </span>
            </h4>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    answer={answer}
                    setAnswer={toggleAnswer}
                    graded={graded}
                    setGraded={setGraded}
                />
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    answer={answer}
                    setAnswer={toggleAnswer}
                    graded={graded}
                    setGraded={setGraded}
                />
            }
            <br/>
            <div>
            <span className='float-left'>
                Your Answer:
            </span>

            {
                answer && <span>
                     {answer}
                </span>
            }
            </div>
            <br/>
            <button
                type="button"
                className="btn btn-success float-left"
                onClick={() => {
                    setGraded(true);
                }}>
                Grade
            </button>
        </div>
    )
}

export default Question