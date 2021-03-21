import React, {useState} from 'react'

const HeadingWidget = (
    {
        widget,
        updateWidget,
        deleteWidget
    }) => {

    const [editing, setEditing] = useState(false);
    const [newItem, setNewItem] = useState(widget);

    return(
        <div>
            {/*<h4>Heading Widget</h4>*/}
            {
                editing &&
                <div>
                    <i onClick={() => {
                        updateWidget(newItem);
                        setEditing(false);
                    }} className="fas fa-check float-right"></i>

                    <i onClick={() => {
                        deleteWidget(widget);
                        setEditing(false);
                    }}
                       className="fas fa-trash float-right">
                    </i>

                    <input
                        onChange={(event) =>
                            setNewItem({...newItem, text: event.target.value})
                        }
                        value={newItem.text} className="form-control"/>

                    <select
                        onChange={(event) =>
                            setNewItem(newItem =>
                        ({...newItem, type: event.target.value}))
                        } value={newItem.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                    </select>

                    <select
                        onChange={(e) =>
                            setNewItem({...newItem, size: parseInt(e.target.value)})
                        } value={newItem.size} className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                </div>
            }
            {
                !editing &&
                <>
                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}
                    <i onClick={() => setEditing(true)} className="fas fa-cog float-right"/>
                </>
            }
        </div>
    )
}

export default HeadingWidget