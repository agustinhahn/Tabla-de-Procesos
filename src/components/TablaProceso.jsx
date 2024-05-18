import { useContext } from 'react';
import { ContextCart } from '../context/CartContext';
import ElementTask from './ElementTask';

const TablaProceso = ({getList, draggingOver, onDrop, startDrag}) => {

    const { tareas, setTareas } = useContext(ContextCart)

    const deleteProdFunction = (id) =>{
        const newList = tareas.filter((element)=> element.id != id)
        setTareas(newList)
    }

    return (
        <>
            <div className="column column--2">
                <h3>
                    EN PROCESO
                </h3>
                <div className="dd-zone"
                    droppable="true"
                    onDragOver={(evt => draggingOver(evt))}
                    onDrop={(evt => onDrop(evt, 2))}
                >
                    <div className="dd-element">
                        {getList(2).map(item => (
                            <ElementTask key={item.id} item={item} deleteProdFunction={deleteProdFunction} startDrag={startDrag} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TablaProceso