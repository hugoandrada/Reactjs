import React, { useEffect, useState } from "react";

function ApiEjemplo () {

    const [user, setUser] = useState([]);

    useEffect(() => {
        //console.log('desde useEfect')
        obtenerDatos();

    }, []);

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json()
        //console.log(users);
        setUser(users);
    }

    return(

        <div>
            <h2>Datos desde API</h2>
            {
            user.map(item => (
                <p key={item.id}>{item.id} - {item.name} - {item.address.city}</p>
            ))
            }
        </div>
    )
}

export default ApiEjemplo;