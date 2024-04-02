import { useState } from "react"
import { useContext } from 'react';
import { ContextCart } from '../context/CartContext';
import TablaPendientes from "./TablaPendientes";
import TablaProceso from "./TablaProceso";
import TablaFinalizadas from "./TablaFinalizadas";
import ButtonAddTarea from "./ButtonAddTarea";
import ButtonDeleteAll from "./ButtonDeleteAll";
import ModalNuevaTarea from "./ModalNuevaTarea";

const DragAndDrop = () => {

    const { tareas, setTareas } = useContext(ContextCart)

    const [useModal, setUseModal] = useState(false)

    const handleModal = () =>{
        setUseModal(true)
    }

    const closeModal = () => {
        setUseModal(false)
    }


    const getList = (list) => {
        return tareas.filter(item => item.list === list)
    }

    const startDrag = (evt, item) => {
        evt.dataTransfer.setData("itemID", item.id)
    }

    const draggingOver = (evt) => {
        evt.preventDefault()
    }

    const onDrop = (evt, list) => {
        const itemID = evt.dataTransfer.getData("itemID")
        const item = tareas.find(item => item.id == itemID)
        item.list = list

        const newState = tareas.map(task => {
            if (task.id === itemID) return item;
            return task
        })
        setTareas(newState)
    }

    //esta funcion en el futuro tiene que eliminar el cache de memoria
    const clearAll = () => {
        setTareas([])
    }

    const clearBloquePendientes = () => {
        const clearPendientes = tareas.filter(item => item.categoria !== "pendiente")
        setTareas(clearPendientes)
    }

    return (
        <>
            <div className="buttonsGral">
                <ButtonAddTarea handleModal={handleModal} />
                <ButtonDeleteAll clearAll={clearAll} />
            </div>
            <div className="titleCenter">
                {
                    useModal === true ?
                    (
                        <ModalNuevaTarea closeModal={closeModal} />
                    ):
                    <h1 className="tituloGral">
                    LISTA DE TAREAS
                    </h1>
                }
            </div>
            <br />
            <div className="drag-and-drop">
                <TablaPendientes getList={getList} draggingOver={draggingOver} startDrag={startDrag} onDrop={onDrop} />
                <TablaProceso getList={getList} draggingOver={draggingOver} startDrag={startDrag} onDrop={onDrop} />
                <TablaFinalizadas getList={getList} draggingOver={draggingOver} startDrag={startDrag} onDrop={onDrop} />
            </div>
        </>
    )
}

export default DragAndDrop