import React from "react";
import PropTypes from 'prop-types'
import { Contacto } from "./componenteA";

const Contactos=({props}) =>{
    return(
        <div>
            <h2>
             Tu nombre es: {props.nombre}
            </h2>
            <h2>
                Tu apellido es: {props.apellido}
                </h2>
                <h2>
                Tu email es: {props.email}
                </h2>
                <h2>
                Estado de coneccion: {props.conectado? 'Contacto En Línea': 'Contacto No Disponible'}
                </h2>
        </div>
    )
}
Contactos.propTypes={
    props: PropTypes.instanceOf(Contacto)
}

export default Contactos