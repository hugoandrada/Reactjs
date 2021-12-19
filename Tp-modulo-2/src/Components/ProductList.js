import '../index.css';
import React from "react";
import { Link } from "react-router-dom"

function ProductList(props) {
    const { datos } = props

    return (

        <article key={datos.id} className="product-list">
            <h3>{datos.title}</h3>
            <p>Precio: $ {datos.price}</p>
            <img src={datos.thumbnail} alt="100px" width="100px" />
            <button className="btn"><Link to={'/product/' + datos.id}>Ver Detalle</Link></button>
        </article>

    )
}

export default ProductList;