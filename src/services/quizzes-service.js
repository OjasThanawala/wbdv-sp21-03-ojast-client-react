const QUIZZES_URL = 'https://cs5610-sp21-ojas-server-node.herokuapp.com/api/quizzes';
const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}
const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}

const submitQuiz = (quizId, questions) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(result => console.log(result))
}

const findAttemptsForQuiz = (qId) => {
    return fetch(`${QUIZZES_URL}/${qId}/attempts`)
        .then(response => response.json())
}


export default {
    findAllQuizzes, findQuizById, submitQuiz, findAttemptsForQuiz
}

