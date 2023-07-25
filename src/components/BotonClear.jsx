import React from 'react'
import '../styles/BotonClear.css'

function BotonClear({ children, manejarClear }) {
  return (
    <div className='boton-clear' onClick={manejarClear}>
        {children}
    </div>
  )
}

export default BotonClear