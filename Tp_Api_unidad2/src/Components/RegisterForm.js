import React from "react";

const LoginForm = () => {
    return (
        <div>
            <p><label>Nombre</label></p>
            <p><input type="text" placeholder="name.." /></p>
            <p><label>Email</label></p>
            <p><input type="email" placeholder="email.." /></p>
            <p><button>Enviar</button></p>
        </div>
    )
}

export default LoginForm;