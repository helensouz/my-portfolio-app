import React from "react";
import  '../header/header.css'
import bgImage from "../../../src/assets/bg.svg"
import fundobg from "../../../src/assets/fundo-bg.svg"

const Header = () => {
    return ( 
        
        <div className="Header">
        
          <header>
         

            <div className="navbar">
                <nav className="nav-content">
                    <div className="logo">
                        Helen Souza de Oliveira
                    </div>
                    <div>
                        <ul className="nav-items">
                            <li>Home</li>
                            <li>Quem sou </li>
                            <li>Conhecimentos</li>
                            <li>Experiencia</li>
                            <li>Projetos</li>
                           
                        </ul>

                    </div>

                </nav>
            </div>

          </header>

          <section className="section-developer">
            <div className="section-developer-content">
                <h1>Helen Oliveira</h1>
                <h6>Desenvolvedora front end</h6>
                <p>Sou uma desenvolvedora front end  e aspirante a designer UI.
                    Trabalho com programacao web há 1 ano.
                </p>
                <div className="developer-content-buttons">
                    <button className="btn-download">Curriculo</button>
                    <button className="btn-contact">Entrar em contato</button>
                </div>

            </div>  
            <div className="section-developer-image">
                <img className="bg-front" src={bgImage} alt="" />
                <img className="fundo-bg" src={fundobg} alt="" />
            </div>
          </section>
        </div>
     );
}
 
export default Header;