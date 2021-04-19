import './App.css';
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";
import QuizAttempts from "./components/quizzes/quiz-attempt"
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact={true}
                       component={Home}/>
                <Route path="/courses"
                       component={CourseManager}/>
                {/*<Route path="/editor" exact={true} render={(props) => <CourseEditor {...props}/>}/>*/}

                <Route path="/courses/:courseId/quizzes" exact={true}>
                    <QuizzesList/>
                </Route>
                <Route path="/courses/:courseId/quizzes/:quizId/attempts" exact={true}>
                    <QuizAttempts/>
                </Route>
                <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                    <Quiz/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
