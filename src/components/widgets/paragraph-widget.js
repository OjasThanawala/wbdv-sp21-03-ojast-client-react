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
                    <i onClick={() => {
                        setEditing(false);
                        deleteWidget(widget)}
                    }
                       className="fas fa-trash float-right">
                    </i>

                    <i onClick={() => {
                        updateWidget(newItem);
                        setEditing(false);
                    }} className="fas fa-check float-right"></i>

                    <textarea
                        onChange={(event) =>
                            setNewItem(newItem => ({...newItem, text: event.target.value}))
                    } value={newItem.text} className="form-control">
                    </textarea>

                    <select
                        onChange={(event) =>
                            setNewItem({...newItem, type: event.target.value})
                        } value={newItem.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"LIST"}>List</option>
                    </select>
                </>
            }
            {
                !editing &&
                <>
                    <p>
                        {newItem.text}
                    </p>
                    <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                </>
            }
        </div>
    )
}

export default ParagraphWidget