import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
function ProductPage() {

    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);

    const GetProduct = async () => {
        try {
            const url = 'https://api.mercadolibre.com/sites/MLA/search?q=iphone';
            const datos = await fetch(url);
            const response = await datos.json();
            //console.log(response.results);
            setProducto(response.results);//results es el atributo que devuelve ml
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
            <div className="product">
                <h1>Product Page</h1>
                {producto.map((item) =>
                (<article key={item.id} className="product-list">
                    <h3>{item.title}</h3>
                    <p>Precio: $ {item.price}</p>
                    <img src={item.thumbnail} alt="100px" width="100px" />
                    <button><Link to={'/product/' + item.id}>Ver Detalle</Link></button>
                </article>
                ))}
            </div>
        )
    }
}

export default ProductPage;