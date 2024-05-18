import { useContext } from 'react';
import { ContextCart } from '../context/CartContext';
import ElementTask from './ElementTask';

const TablaFinalizadas = ({getList, draggingOver, onDrop, startDrag}) => {

    const { tareas, setTareas } = useContext(ContextCart)

    const deleteProdFunction = (id) =>{
        const newList = tareas.filter((element)=> element.id != id)
        setTareas(newList)
    }

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
                            <ElementTask key={item.id} item={item} deleteProdFunction={deleteProdFunction} startDrag={startDrag} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TablaFinalizadas