import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo/planetario.svg"

export default function Header() {
    return(
        <div>
        <header className='headerContainer'>
            <div><img className ='imgHeader_Logo' src={Logo} alt='Logo' /><h1 className = 'Title'>Planetario Digital Chimalhuacán</h1></div>
            <div>
                <div className = 'container-btn'><img className ='imgHeader' src={require('../images/icons/icons8-myspace-squared-48.png')} alt='visit' /><p>Visitantes: 0</p></div>
                <div className = 'container-btn'><img className ='imgHeader' src={require('../images/icons/about.png')} alt='About' /><Link className="btn_header" to='/Acerca'>Acerca de</Link></div>
                <div className = 'container-btn'><img className ='imgHeader' src={require('../images/icons/icons8-ubicación-en-todo-el-mundo-48.png')} alt='Ubication' /><a className="btn_header" href='https://goo.gl/maps/cXpz8Ttv7xCsbur59' target='_blank' rel='noopener noreferrer'>Ubicación</a></div>
            </div>
        </header>
    </div>
    );
}