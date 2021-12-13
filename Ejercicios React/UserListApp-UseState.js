import React, { useState } from "react";

function UserListApp() {

    const datosUsuario = [
        { id: 1, nombre: 'Leo', apellido: 'Messi' },
        { id: 2, nombre: 'Cristiano', apellido: 'Ronaldo' },
    ];

    const [usuarios, setUsuarios] = useState(datosUsuario);
    const estadoInicial = { id: null, nombre: '', apellido: '' };
    const [nuevoUsuario, setNuevoUser] = useState(estadoInicial);

    //agregar usuarios
    const agregarUsuario = (usuario) => {
        usuario.id = usuarios.length + 1;
        setUsuarios([...usuarios, usuario]);
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNuevoUser({ ...nuevoUsuario, [name]: value });
    }
    //eliminar usuarios
    const eliminarUsuario = (id) => {
        setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    }

    return (
        <div>
            {usuarios.map(item =>
                <div key={item.id}>
                    <b>{item.id} -
                        {item.nombre} -
                        {item.apellido}</b>
                    <button onClick={() => eliminarUsuario(item.id)}>BORRAR</button>
                </div>
            )}

            <form
                onSubmit={event => {
                    event.preventDefault();
                    agregarUsuario(nuevoUsuario);
                    setNuevoUser(estadoInicial);
                    //volver el estado a cero
                }}
            >
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    required="required"
                    value={nuevoUsuario.nombre}
                    onChange={handleInputChange}
                />
                <label>Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    required="required"
                    value={nuevoUsuario.apellido}
                    onChange={handleInputChange}
                />
                <button type="submit">Nuevo usuario</button>
            </form>
        </div>
    )
}

export default UserListApp;