import React from "react";
import  "../about/about.css"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import email from "../../assets/mail.svg"


const About = () => {
    return ( 
        <>
        <div className="about-content">
   
        <p>Iniciei os estudos em programação em 2020, mas aprofundei mesmo somente em 2021 em front 
            end que foi a stack que mais me chamou a atenção.Migrei da área de arquitetura 
            onde realizei um curso técnico de design de interiores, mas somente quando estava 
            prestes a entrar na faculdade eu percebi uma paixão por trabalhar com design e 
            desenvolvimento front end.Realizei um Bootcamp fullstack jr pela Generation Brasil 
            para aprimorar os meus conhecimentos e consolidá-los tanto no front end quanto no 
            back end.Tenho familiaridade com Java, Spring Boot, MySql, MongoDb, Postgres, Html5,
             Css3, Angular, VueJs, Postman. Venho aprimorando meus conhecimentos em design então
              tenho conhecimentos válidos usando Figma e Adobe XD.
</p>
    <div className="social-medias">
        <button className="github"> <img src={github}/></button>
        <button className="linkedin"> <img src={linkedin}/></button>
        <button className="email"> <img src={email}/></button>

        </div>
        </div>
        
        </>
     );
}
 
export default About;