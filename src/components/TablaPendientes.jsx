import { useContext } from 'react';
import { ContextCart } from '../context/CartContext';
import ElementTask from './ElementTask';

const TablaPendientes = ({getList, draggingOver, onDrop, startDrag}) => {

    const { tareas, setTareas } = useContext(ContextCart)

    const deleteProdFunction = (id) =>{
        const newList = tareas.filter((element)=> element.id != id)
        setTareas(newList)
    }


    return (
        <>
            <div className="column column--1">
                <h3>
                    PENDIENTES
                </h3>
                <div className="dd-zone"
                    droppable="true"
                    onDragOver={(evt => draggingOver(evt))}
                    onDrop={(evt => onDrop(evt, 1))}
                >
                    <div className="dd-element">
                        {getList(1).map(item => (
                            <ElementTask key={item.id} item={item} deleteProdFunction={deleteProdFunction} startDrag={startDrag} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TablaPendientes