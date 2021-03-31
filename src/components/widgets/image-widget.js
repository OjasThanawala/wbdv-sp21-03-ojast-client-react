import React, {useState} from 'react'

const ImageWidget = (
    {
        widget,
        updateWidget,
        deleteWidget
    }) => {
    const [editing, setEditing] = useState(false)
    const [newItem, setNewItem] = useState(widget)
    return (
        <div>
            {
                !editing &&
                    <>
                        <img alt='EXAMPLE' width={widget.width} height={widget.height} src={widget.url}/>
                        <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                    </>

            }
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



                    <select
                        onChange={(event) =>
                            setNewItem({...newItem, type: event.target.value})
                        } value={newItem.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"LIST"}>List</option>
                    </select>

                    <div className="form-group">
                        Image URL
                        <input placeholder="Image URL"  onChange={(event) => setNewItem({
                            ...newItem, url: event.target.value
                        })} value={newItem.url} className="form-control"/>
                    </div>
                    <div className="form-group">
                        Image Width
                        <input onChange={(event) => event.target.value <= 400 ?
                            setNewItem({...newItem, width: event.target.value}):
                            setNewItem({...newItem, width: 400})
                        } value={newItem.width} className="form-control"/>
                    </div>
                    <div className="form-group">
                        Image Height
                        <input onChange={(event) => event.target.value <= 400 ?
                            setNewItem({...newItem, height: event.target.value}):
                            setNewItem({...newItem, height: 400})
                        } value={newItem.height} className="form-control"/>
                    </div>

                </>
            }
        </div>
    )
}

export default ImageWidget