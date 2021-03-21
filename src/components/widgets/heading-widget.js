import React, {useState} from 'react'

const HeadingWidget = (
    {
        widget,
        updateWidget,
        deleteWidget
    }) => {

    const [editing, setEditing] = useState(false)
    const [newItem, setNewItem] = useState(widget)
    return(
        <div>
            <h4>Heading Widget</h4>
            {
                editing &&
                <>
                    <i onClick={() => deleteWidget(widget)} className="fas fa-trash float-right"></i>

                    <i onClick={() => {
                        updateWidget({newItem});
                        {setEditing(false);}
                    }} className="fas fa-2x fa-check float-right"></i>

                    <input
                        onChange={(event) => setNewItem(newItem =>
                            ({...newItem, title: event.target.value})
                        )}
                        value={widget.text} className="form-control"/>

                    <select onChange={(event) => setNewItem(widget =>
                        ({...widget, size: parseInt(event.target.value)})
                    )} value={widget.type}
                            className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>

                    </select>
                    <input value={widget.text} className="form-control"/>
                    <select value={widget.size} className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                </>
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
                </>
            }
        </div>
    )
}

export default HeadingWidget