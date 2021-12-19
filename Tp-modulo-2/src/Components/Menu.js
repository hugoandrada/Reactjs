import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav className="navbar">
            <Link id="text" to="/">Home</Link>
            <Link id="text" to="/login">Login</Link>
            <Link id="text" to="/registro">Registro</Link>
        </nav>

    )
}

export default Menu;