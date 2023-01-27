import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from "../Clases/contacto.class";
function ComponenteB({contacto, cambiarEstado}) {
    console.log(contacto)
  return (
    <div>
       Nombre: {contacto.Nombre} <br/>
       Apellido: {contacto.Apellido}<br/>
       Email: {contacto.Email}<br/>
       Estado de conexion: {contacto.Conectado?"Conectado":"Desconectado"}<br/>
       <button onClick={()=>cambiarEstado()}>Cambiar estado conexion</button>
    </div>
  )
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
    cambiarEstado: PropTypes.bool,  
}

export default ComponenteB

