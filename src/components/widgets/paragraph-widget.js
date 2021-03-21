import React, {useState} from 'react'

const ParagraphWidget = (
    {
        widget,
        updateWidget,
        deleteWidget
    }) => {
    const [editing, setEditing] = useState(false)
    const [newItem, setNewItem] = useState(widget)
    return(
        <div>
            <h4>Paragraph Widget</h4>
            {
                editing &&
                <>
                    <i onClick={() => deleteWidget(widget)} className="fas fa-trash float-right"></i>

                    <i onClick={() => {
                        updateWidget({newItem});
                        {setEditing(false);}
                    }} className="fas fa-2x fa-check float-right"></i>

                    <textarea
                        onChange={(event) => setNewItem(newItem =>
                        ({...newItem, title: event.target.value})
                    )}
                        value={widget.text} className="form-control">

                    </textarea>

                    <select onChange={(event) => setNewItem(widget =>
                        ({...widget, size: parseInt(event.target.value)})
                    )} value={widget.type}
                        className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>

                    </select>
                </>
            }
            {
                !editing &&
                <p>
                    {widget.text}
                </p>
            }
        </div>
    )
}

export default ParagraphWidget