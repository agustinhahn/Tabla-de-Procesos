import React from 'react'

const ButtonAddTarea = ({handleModal}) => {
    return (
        <>
            <button className='buttonAddTarea' onClick={()=>{handleModal()}}>AGREGAR TAREA</button>
        </>
    )
}

export default ButtonAddTarea