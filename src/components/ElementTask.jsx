import React from 'react'

const ElementTask = ({deleteProdFunction,item, startDrag}) => {
    return (
        <div className="dd-element" draggable onDragStart={(evt) => startDrag(evt, item)}>
        <strong className="title">
            {item.title}
        </strong>
        <p className="body">
            {item.body}
        </p>
        <button className="delElement" onClick={()=>deleteProdFunction(item.id)}>Delete</button>
        <hr></hr>
    </div>
    )
}

export default ElementTask