import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    return (

        <nav>
            <Link to="/">Home</Link>
            <Link to="/product">Productos</Link>
            <Link to="/login">Login</Link>
            <Link to="/contact">Contacto</Link>
        </nav>

    )
}

export default Menu;