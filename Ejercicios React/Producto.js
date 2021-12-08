import React, { useEffect, useState } from "react";

function Producto() {

    const [productos, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);

    const obtenerDatos = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const prod = await data.json();
        setProducto(prod)
        setLoading(false);
    }

    useEffect(() => {
        obtenerDatos();

    }, []);

    if (loading) {
        return (
            <h1>Loading....</h1>
        )
    } else {
        return (
            <div className="prod-class">
                {
                    productos.map(
                        item => (
                            <div key={item.id}>
                                <p><strong>{item.title}</strong></p>
                                <p>{item.id}</p>
                                <button>Ver detalle</button>
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}

export default Producto;