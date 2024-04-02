import React from 'react'

const TablaFinalizadas = ({getList, draggingOver, onDrop, startDrag}) => {
    return (
        <>
            <div className="column column--3">
                <h3>
                    FINALIZADAS
                </h3>
                <div className="dd-zone"
                    droppable="true"
                    onDragOver={(evt => draggingOver(evt))}
                    onDrop={(evt => onDrop(evt, 3))}
                >
                    <div className="dd-element">
                        {getList(3).map(item => (
                            <div className="dd-element" key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className="title">
                                    {item.title}
                                </strong>
                                <p className="body">
                                    {item.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TablaFinalizadas