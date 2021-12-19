import React from "react";
import { useForm } from 'react-hook-form';

function RegistroPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <h1>Registro Page</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <p><label>Nombre</label></p>
                <p><input
                    type="text"
                    placeholder="Nombre"
                    {...register("name", { required: true })}
                /></p>
                {errors.name && <b>Ingrese el nombre</b>}
                <p><label>Apellido</label></p>
                <p><input
                    type="text"
                    placeholder="lastname"
                    {...register("lastname", { required: true })}
                /></p>
                {errors.lastname && <b>Ingrese el apellido</b>}
                <p><label>Email</label></p>
                <p><input
                    type="email"
                    placeholder="email"
                    {...register("email", { required: true })}
                /></p>
                {errors.email && <b>Ingrese su email</b>}
                <p><label>Telefono</label></p>
                <p><input
                    type="telefono"
                    placeholder="telefono"
                    {...register("telefono", { required: true, minLength: 10 })}
                /></p>
                {errors.telefono && <b>Ingrese un numero valido</b>}
                <button>Registrarse</button>
            </form>
        </div>
    )
}

export default RegistroPage;