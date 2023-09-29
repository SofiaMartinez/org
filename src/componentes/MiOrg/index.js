import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //estado - hooks
    //useState
    //useState()
    // const [nombreVariable, FuncionActualiza] = useState(valorInicial)
    
    //const [mostrar,actualizarMostrar] = useState (true)
    //const manejarClick = () =>{
    //  console.log("Mostrar/Ocultr elemento")
    //  actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg