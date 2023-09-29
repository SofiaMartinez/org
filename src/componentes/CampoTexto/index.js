import { useState } from "react"
import "./Campo.css"
import { act } from "react-dom/test-utils"

const Campo = (props) => {
    const [valor,actualizarValor] = useState("") 
    console.log("Datos: ", props)
    const placeholderMdificado =`${props.placeholder}...`
    
    //Destructuración
    const {type ="text"}=props
 

    const manejarCambio = (e) => {
        console.log("cambio",e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={placeholderMdificado} 
        required={props.required} 
        value={props.valor} 
        onChange={manejarCambio}
        type={type}
        />
    </div>
}

export default Campo