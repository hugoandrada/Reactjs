import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav className="navbar">
            <Link id="text" to="/">Home</Link>
            <Link id="text" to="/product">Productos</Link>
            <Link id="text" to="/login">Login</Link>
            <Link id="text" to="/contact">Contacto</Link>
        </nav>

    )
}

export default Menu;