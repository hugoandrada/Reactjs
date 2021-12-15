import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function DetailProductPage() {

    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    //console.log("id", id)

    const GetProductById = async () => {
        try {
            const url = 'https://api.mercadolibre.com/items/' + id;
            const datos = await fetch(url);
            const response = await datos.json();
            //console.log(response);
            setProducto(response);
            setLoading(false);

        } catch (error) {
            alert('error');
        }
    }

    useEffect(() => {
        GetProductById();

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
                <h1>Detalle Page</h1>
                <article className="product-list">
                    <h3><b>{producto.title}</b></h3>
                    <img src={producto.thumbnail} width="200px" />
                    <b>Precio: $ {producto.price}</b>
                </article>
            </div>
        )
    }
}

export default DetailProductPage;