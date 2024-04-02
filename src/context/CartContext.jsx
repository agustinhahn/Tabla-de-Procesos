import {createContext, useState} from 'react'

export const ContextCart = createContext(null)


export const CartContext = ({children}) =>{

const [tareas, setTareas] = useState([])

    return (

        <ContextCart.Provider value={{ tareas, setTareas}}>
            {children}
        </ContextCart.Provider>

    )
}

export default CartContext