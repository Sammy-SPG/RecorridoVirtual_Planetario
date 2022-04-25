import React from 'react';
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="containerNavigation">
            <p className="description">Inmersion en un recorrido virtual con realidad aumentada</p>
            <div>
                <Link className='button' to="/tour">Ver recorrido</Link>
                <Link className='button' to="/tour">Salas eliminadas</Link>
            </div>
        </div>
    );
}