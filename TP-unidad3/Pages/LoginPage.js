import React from "react";
import { useForm } from 'react-hook-form'

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data); 
      }
  
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre de usuario</label>
                    <input
                        type="text"
                        placeholder="nombre"
                        {...register("name",{required: true})} />
                        {errors.name && <b>Por favor complete el nombre</b>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="text"
                        placeholder="last name"
                        {...register("lastname",{required: true, minLength: 6})} />
                        {errors.lastname && <b>Minimo 6 caracteres</b>}
                </div>
                <button>Iniciar Sesion</button>
            </form>
        </div>

    )
}

export default LoginPage;