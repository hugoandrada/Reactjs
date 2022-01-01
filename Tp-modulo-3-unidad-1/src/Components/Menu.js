import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'


/*<nav className="navbar">
    <Link id="text" to="/">Home</Link>
    <Link id="text" to="/login">Login</Link>
    <Link id="text" to="/registro">Registro</Link>
</nav>*/

function Menu() {
    return (


        <Navbar bg="primary" variant="dark">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
            </Nav>
        </Navbar>

    )
}

export default Menu;