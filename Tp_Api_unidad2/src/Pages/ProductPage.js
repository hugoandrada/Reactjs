import React, { useState, useEffect } from "react";

function ProductPage() {

    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);

    const GetProduct = async () => {
        try {
            const url = 'https://api.mercadolibre.com/sites/MLA/search?q=lenovo';
            const datos = await fetch(url);
            const response = await datos.json();
            //console.log(response.results);
            setProducto(response.results);
            setLoading(false);

        } catch (error) {
            alert('error');
        }
    }

    useEffect(() => {
        GetProduct();

    }, []);

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    } else {

        return (
            <div className="product-list">
                <h1>Product Page</h1>
                <ul>
                    {producto.map((item) =>
                    (<li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>Precio: $ {item.price}</p>
                        <img src={item.thumbnail} alt="100px" width="100px" />
                        <button>Ver Detalle</button>
                    </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ProductPage;