import React from "react";
import { useForm } from 'react-hook-form'
import { Button, Form } from 'react-bootstrap'


function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="article">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p><label>Nombre de usuario</label></p>
                <p><input
                    type="text"
                    placeholder="nombre"
                    {...register("name", { required: true })} /></p>
                {errors.name && <b>Por favor complete el nombre</b>}
                <p><label>Password</label></p>
                <p><input
                    type="password"
                    placeholder="last name"
                    {...register("lastname", { required: true, minLength: 6 })} /></p>
                {errors.lastname && <b>Minimo 6 caracteres</b>}

                <Button type="submit" variant="primary">Iniciar Sesion</Button>
            </form>
        </div>

    )
}

export default LoginPage;