import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from '../../services/widget-service'
import {connect} from "react-redux";

const WidgetList = (
    {
        widgets=[],
        findWidgetsForTopic,
        createWidget,
        deleteWidget,
        updateWidget
    }
) => {
    const {layoutId, courseId, moduleId, lessonId, topicId} = useParams();
    const [editingWidget, setEditingWidget] = useState({});

    useEffect(() => {
        // console.log("LOAD TOPICS FOR LESSON: " + lessonId)
        if(lessonId !== "undefined" && typeof lessonId !== "undefined" &&
            topicId !== "undefined" && typeof topicId !== "undefined"){
            findWidgetsForTopic(topicId)
        }
    }, [topicId])

    return(
        <div>
            <i onClick={()=>createWidget(topicId)} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    // editing={editingWidget.id === widget.id}
                                    widget={widget}
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    // editing={editingWidget.id === widget.id}
                                    widget={widget}
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})
const dtpm = (dispatch) => ({
    findWidgetsForTopic: (topicId) => {
        // console.log("LOAD TOPICS FOR LESSONS:")
        // console.log(lessonId)
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                widgets
            }))
    },
    createWidget: (topicId) => {
        widgetService
            .createWidget(topicId)
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget: widget
            }))
    },

    deleteWidget: (item) =>
        widgetService.deleteWidget(item.id)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetToDelete: item
            })),
    updateWidget: (widget) =>
        widgetService.updateWidget(widget.id, widget)
            .then(status => dispatch({
                type: "UPDATE_WIDGET",
                widget: widget
            })),
})

export default connect(stpm, dtpm)(WidgetList);