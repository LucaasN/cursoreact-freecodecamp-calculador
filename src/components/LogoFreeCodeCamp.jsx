import React from 'react'
import '../styles/LogoFreeCodeCamp.css'
import freeCodeCampLogo from '../images/fcc-logo.png';

function LogoFreeCodeCamp() {
  return (
    <div className='freecodecamp-logo-contenedor'>
        <img 
          src = {freeCodeCampLogo}
          className ='freecodecamp-logo'
          alt = 'Logo de freecodecamp'
        />
    </div>
  )
}

export default LogoFreeCodeCamp