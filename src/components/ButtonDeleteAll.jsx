import React from 'react'

const ButtonDeleteAll = ({clearAll}) => {
    return (
        <>
            <button className='buttonDeleteAll' onClick={()=>{clearAll()}}>ELIMINAR TODO</button>
        </>
    )
}

export default ButtonDeleteAll