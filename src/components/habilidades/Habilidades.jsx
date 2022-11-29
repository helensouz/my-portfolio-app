import React from "react";
import "../habilidades/habilidades.css"
import fundobg from "../../assets/fundo-bg.svg"

const habilidades = () => {
    return ( 
        <>
        <div className="habilidades-container">
        <img className="fundo-bg" src={fundobg} alt="" />


        <h3>Habilidades</h3>
        
        <div className="tecnologias-content">
        <div className="card-tech">
            <p>Angular</p>
        </div>
        <div className="card-tech">
            <p>Javascript</p>
        </div>
       
        <div className="card-tech">
            <p>Reactjs</p>
        </div>
        </div>
        </div>  
        </>
     );
}
 
export default habilidades;