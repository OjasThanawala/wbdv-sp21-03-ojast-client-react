import React, {useState} from "react";
import './question.style.client.css'


const MultipleChoiceQuestion = ({
        question,
        answer,
        setAnswer,
        graded,
        setGraded}) => {
    return(
        <div className='container-fluid'>
            <ul className="list-group">
                {
                    question.choices.map((choice, idx) => {
                        return(
                            <li className={`list-group-item
                                ${(graded && answer === choice && question.correct === answer) ? "list-group-item-success" : ""}
                                ${(graded && answer === choice && question.correct !== answer) ? "list-group-item-danger" : ""}
                                ${(graded && answer !== choice && question.correct !== answer && question.correct === choice) ? "list-group-item-success" : ""}`}
                                key={idx}>

                                <label><input
                                    onClick={() => {
                                        setAnswer(choice)
                                        question.answer = choice
                                    }}
                                    type="radio"
                                    name={question._id}
                                    value={choice}/>
                                    {choice}
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MultipleChoiceQuestion