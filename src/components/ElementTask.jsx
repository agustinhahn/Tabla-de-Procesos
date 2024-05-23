import React, { useEffect, useState } from 'react'

const ElementTask = ({ deleteProdFunction, item, startDrag, getList }) => {

    const [finishDate, setFinishDate] = useState("")

    const copiarTextoAlPortapapeles = () => {
        navigator.clipboard.writeText(item.body)
    }

    useEffect(()=>{
        const currentDate = new Date()
        const fecha = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear()
        const hora = currentDate.getHours() + ":" + currentDate.getMinutes()
        setFinishDate(`${fecha} - ${hora}`)
    },[getList === 3])

    return (
        <div className="dd-element" draggable onDragStart={(evt) => startDrag(evt, item)}>
            <p className='elementDate'>{item.date}</p>
            {
                getList === 3 ? <p className='elementDate'>{finishDate}</p> : null
            }
            <strong className="title">
                {item.title}
            </strong>
            <p className="body">
                {item.body}
            </p>
            <div className='buttonsElementTask'>
                <button className="delElement" onClick={() => deleteProdFunction(item.id)}>Delete</button>
                <button className="copyElement" onClick={copiarTextoAlPortapapeles}>Copy</button>
            </div>
            <hr></hr>
        </div>
    )
}

export default ElementTask