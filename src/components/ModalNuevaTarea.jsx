import { useContext } from 'react';
import { ContextCart } from '../context/CartContext';
import { useState } from "react"

const ModalNuevaTarea = ({ closeModal }) => {

    const { tareas, setTareas } = useContext(ContextCart)

    const [tituloInput, setTituloInput] = useState("") 
    const [descriptionInput, setDescriptionInput] = useState("")

    const handleAddTarea = () => {
        let nuevoId = generadorRandomId()
        const nuevoObj = {
            id: nuevoId,
            title: tituloInput,
            body: descriptionInput,
            list: 1
        }
        setTareas([...tareas, nuevoObj])
        clearInput()
    }

    const clearInput = () =>{
        setTituloInput("")
        setDescriptionInput("")
        closeModal()
    }

    const generadorRandomId = () => {
        return Math.floor(Math.random() * Date.now())
    }

    return (
        <>
            <div className='modalNuevatarea'>
                <h2 className='tituloModal'>NUEVA TAREA</h2>
                <input
                    className='inputNuevaTarea'
                    type='text'
                    placeholder='Escribe un titulo'
                    value={tituloInput}
                    onChange={(e)=>setTituloInput(e.target.value)}
                    >
                </input>
                <input
                    className='inputNuevaTarea'
                    type='text'
                    placeholder='Escribe breve descripcion'
                    value={descriptionInput}
                    onChange={(e)=>setDescriptionInput(e.target.value)}
                    >
                </input>
                <div className='modalButtons'>
                    <button className='modalButtonAcep' onClick={()=> {handleAddTarea()}}>ACEPTAR</button>
                    <button className='modalButtonCanc' onClick={() => { closeModal() }}>CANCELAR</button>
                </div>
            </div>
        </>
    )
}

export default ModalNuevaTarea