import React from "react";
import { Contacto } from "./componenteA";
import Contactos from './componenteB'

const ListaContacto=() =>{
    const defaultContacto = new Contacto('Hernan', 'Isaza', 'hernan.iz@hotmail.com', false)

    return (
        <div>
            <Contactos props={defaultContacto}></Contactos>
        </div>
    )
}
export default ListaContacto