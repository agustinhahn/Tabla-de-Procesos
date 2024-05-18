import {createContext, useState, useEffect} from 'react'

export const ContextCart = createContext(null)


export const CartContext = ({children}) =>{

    const [tareas, setTareas] = useState(() => {
        const savedTareas = localStorage.getItem('tareas');
        return savedTareas ? JSON.parse(savedTareas) : [];
    });

    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    return (

        <ContextCart.Provider value={{ tareas, setTareas}}>
            {children}
        </ContextCart.Provider>

    )
}

export default CartContext