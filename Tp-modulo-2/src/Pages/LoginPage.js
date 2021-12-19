import React from "react";
import { useForm } from 'react-hook-form'

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="form-div">
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
                <button>Iniciar Sesion</button>
            </form>
        </div>

    )
}

export default LoginPage;