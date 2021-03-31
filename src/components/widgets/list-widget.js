import React, {useState} from 'react'

const ListWidget = (
    {
        widget,
        updateWidget,
        deleteWidget
    }) => {
    const [editing, setEditing] = useState(false)
    const [newItem, setNewItem] = useState(widget)
    const [listType, setListType] = useState(true)
    return (
        <div>
            {
                editing &&
                <>
                    <i onClick={() => {
                        setEditing(false);
                        deleteWidget(widget)
                    }
                    }
                       className="fas fa-trash float-right">
                    </i>

                    <i onClick={() => {
                        updateWidget(newItem);
                        setEditing(false);
                    }} className="fas fa-check float-right"></i>


                    <select
                        onChange={(event) =>{
                            setNewItem({...newItem, type: event.target.value}
                            ); setListType(false)}
                        } value={newItem.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"LIST"}>List</option>
                    </select>
                </>
            }
            {
                editing && listType &&
                <div>
                    <input onChange={(event) => setNewItem({
                        ...newItem, ordered: event.target.checked
                    }) }
                        checked={newItem.ordered} type="checkbox"/> Ordered
                    <br/>
                    Item list
                    <textarea placeholder="Enter list item" onChange={(event) => setNewItem({
                        ...newItem, text: event.target.value
                    }) } value={newItem.text} rows={10} className="form-control"></textarea>

                </div>

            }


            {
                !editing &&
                <>
                    <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
        </div>
    )
}

export default ListWidget