import React, {useState} from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";
import './question.style.client.css'

const Question = ({question, quizId}) => {
    const [answer, setAnswer] = useState([])
    const [graded, setGraded] = useState(false)
    return(
        <div>
            <h5>
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
            </h5>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    answer={answer}
                    setAnswer={setAnswer}
                    graded={graded}
                    setGraded={setGraded}
                />
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    answer={answer}
                    setAnswer={setAnswer}
                    graded={graded}
                    setGraded={setGraded}
                />
            }
            <br/>
            <span className='float-left'>
                Your Answer:
            </span>
            {
                graded && <span>
                    {graded}
                </span>
            }
            <br/>
            <button
                type="button"
                className="btn btn-success float-left"
                onClick={() => setGraded(answer)}>
                Grade
            </button>
            <br/>
        </div>
    )
}

export default Question