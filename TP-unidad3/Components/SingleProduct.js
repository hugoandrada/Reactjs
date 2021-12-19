import React from "react";

function SingleProduct(props) {
    const { datos } = props

    return (

        <article key={datos.id} className="product-list">
            <h3><b>{datos.title}</b></h3>
            <img src={datos.thumbnail} width="200px" alt="400px" />
            <p><b>Precio: $ {datos.price}</b></p>
            <p>Cantidad: {datos.available_quantity}</p>
            <p>Condicion: {datos.condition}</p>
            <p><b>Vendidos:</b>{datos.sold_quantity}</p>
            <button className="btn">
                COMPRAR
            </button>
        </article>

    )
}

export default SingleProduct;