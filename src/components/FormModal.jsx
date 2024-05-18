import React from 'react'

const FormModal = () => {
    return (
        <div className='modalNuevatarea'>
            <h2 className='tituloModal'>NUEVA TAREA</h2>
            <form action="">
                <input
                    className='inputNuevaTarea'
                    type='text'
                    placeholder='Escribe un titulo'
                    value={tituloInput}
                    onChange={(e) => setTituloInput(e.target.value)}
                >
                </input>
                <input
                    className='inputNuevaTarea'
                    type='text'
                    placeholder='Escribe breve descripcion'
                    value={descriptionInput}
                    onChange={(e) => setDescriptionInput(e.target.value)}
                >
                </input>
                <div className='modalButtons'>
                    <button className='modalButtonAcep' onClick={()=> {handleAddTarea()}}>ACEPTAR</button>
                    <button className='modalButtonCanc' onClick={() => { closeModal() }}>CANCELAR</button>
                </div>
            </form>
        </div>
    )
}

export default FormModal