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
                    ${(graded && answer === "true" && question.correct === answer) ? "list-group-item-success" : ""}
                    ${(graded && answer === "true" && question.correct !== answer) ? "list-group-item-danger" : ""}
                    ${(graded && answer !== "true" && question.correct !== answer) ? "list-group-item-success" : ""}
                `}>
                    <input
                        type="radio"
                        onClick={() => {
                            setAnswer("true")
                            question.answer = "true"
                        }}
                        name = {question._id}
                        value="true"/>
                    True
                </div>

                <div className={`list-group-item
                    ${(graded && answer === "false" && question.correct === answer) ? "list-group-item-success" : ""}
                    ${(graded && answer === "false" && question.correct !== answer) ? "list-group-item-danger" : ""}
                    ${(graded && answer !== "false" && question.correct !== answer) ? "list-group-item-success" : ""}
                `}>
                    <input
                        type="radio"
                        onClick={() => {
                            setAnswer("false")
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