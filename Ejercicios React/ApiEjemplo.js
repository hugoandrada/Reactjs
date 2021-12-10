import React, { useEffect, useState } from "react";

function ApiEjemplo() {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json()
        //console.log(users);
        setUser(users);
        setLoading(false);
    }

    useEffect(() => {
        //console.log('desde useEfect')
        obtenerDatos();

    }, []);

    if (loading) {
        return (
            <div>
                Loading.....
            </div>
        )
    } else {
        return (

            <div>
                <h2>Datos desde API</h2>
                {
                    user.map(item => (
                        <div key={item.id}>
                            {item.id} -
                            {item.name} -
                            {item.address.city}
                            <button>Ver detalle</button>
                        </div>
                    ))
                }
            </div>
        )
    }

}

export default ApiEjemplo;