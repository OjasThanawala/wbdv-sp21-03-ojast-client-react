import React from "react";
import './question.style.client.css'

const TrueFalseQuestion = ({
    question,
    answer,
    setAnswer,
    graded,
    setGraded}) => {
    return(
        <div className='container-fluid'>
            <div className='list-group'>
                <div className={`list-group-item
                    ${(graded && graded === "true") ? "selected" : ""}
                    ${(question.correct === "true" && graded !== null) ? "correct" : ""}
                `}>
                    <input
                        type="radio"
                        onClick={() => {
                        setAnswer("true")
                        setGraded(true)
                        question.answer = "true"
                        }}
                        name = {question._id}
                        value="true"/>
                        True
                </div>

                <div className={`list-group-item
                    ${(graded !== null && graded === "false") ? "selected" : ""}
                    ${(question.correct === "false" && graded !== null) ? "correct" : ""}
                `}>
                    <input
                        type="radio"
                        onClick={() => {
                            setAnswer("false")
                            setGraded(false)
                            question.answer = "false"
                        }}
                        name = {question._id}
                        value="false"/>
                    False
                </div>

            </div>
        </div>
    )
}

export default TrueFalseQuestion