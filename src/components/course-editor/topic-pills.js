import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service"
import lessonService from "../../services/lesson-service";

const TopicPills = (
    {
        topics=[],
        findTopicsForLessons,
        createTopicForLesson,
        deleteTopic=(item) => alert("delete " + item._id),
        updateTopic
    }) => {
    const {layoutId, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        console.log("LOAD TOPICS FOR LESSON: " + lessonId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined" &&
            lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLessons(lessonId)
        }
    }, [lessonId])
    return(
        <div className="container-fluid">
            {/*<h2>Topics</h2>*/}
            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                        <li className={`nav-item ${topic._id === topicId ? 'active' : ''}`} key={topic._id}>
                            <EditableItem
                                active={false}
                                // to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                to={`/courses/${layoutId}/editor/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                deleteItem={deleteTopic}
                                updateItem={updateTopic}
                                item={topic}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createTopicForLesson(lessonId)} className="fas fa-plus"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLessons: (lessonId) => {
        console.log("LOAD TOPICS FOR LESSONS:")
        console.log(lessonId)
        topicService.findTopicsForLessons(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))
    },
    createTopicForLesson: (lessonId) => {
        console.log("CREATE TOPIC FOR LESSON: " + lessonId)
        topicService
            .createTopicForLesson(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },

    deleteTopic: (item) =>
        topicService.deleteTopic(item._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: item
            })),
    updateTopic: (topic) =>
        topicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            })),
})

export default connect(stpm, dtpm)(TopicPills)