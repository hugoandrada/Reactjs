import React, { useEffect, useState } from "react";

function Producto () {

    const [producto, setProducto] = useState([]);

    const obtenerDatos = async () => {
        const data = await fetch('https://fakestoreapi.com/products?limit=10');
        const product = await data.json();
        setProducto(product);
    }

    useEffect(() => {
        obtenerDatos();

    }, []);

    return(
        <div>
            <h2>Trabajo Practico Opcional</h2>
            <h3>Listado de Productos Api</h3>
            {
                producto.map(item =>
                <ul key={item.id}>
                    <li><b>{item.title}</b></li>
                    <li>{item.description}</li>
                    <li><b>Precio: ${item.price}</b></li>
                </ul>
                )
            }
        </div>
    )
}

export default Producto;