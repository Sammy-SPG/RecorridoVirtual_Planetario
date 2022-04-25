import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div>
        <header className='headerContainer'>
            <h1>Planetario Digital Chimalhuacan</h1>
            <div>
                <div><p>Visitantes: 10000</p></div>
                <div><Link className="btn_header" to='/Acerca'>Acerca de</Link></div>
                <div><Link className="btn_header" to='/Ubicacion'>Ubicacion</Link></div>
            </div>
        </header>
    </div>
    );
}