import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/nav.css';

const Nav = (props) => {
    return(
        <nav>
            <div className='holder'>
                <ul>
                    <li><NavLink activeclassname="activo" exact="true" to="/">Home</NavLink></li>
                    <li><NavLink activeclassname="activo" exact="true" to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink activeclassname="activo" exact="true" to="/novedades">Novedades</NavLink></li>
                    <li><NavLink activeclassname="activo" exact="true" to="contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;