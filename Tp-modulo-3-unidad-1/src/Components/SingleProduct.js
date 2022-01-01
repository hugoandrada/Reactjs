import React from "react";
import { Card, Button } from 'react-bootstrap';

function SingleProduct({ datos }) {
    //const { datos } = props

    return (

        /*   <article key={datos.id} className="product-list">
               <h3><b>{datos.title}</b></h3>
               <img src={datos.thumbnail} width="200px" alt="400px" />
               <p><b>Precio: $ {datos.price}</b></p>
               <p>Cantidad: {datos.available_quantity}</p>
               <p>Condicion: {datos.condition}</p>
               <p><b>Vendidos:</b>{datos.sold_quantity}</p>
               <button className="btn">
                   COMPRAR
               </button>
           </article>  */

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={datos.thumbnail} />
            <Card.Body>
                <Card.Title>{datos.title}</Card.Title>
                <Card.Text>
                    <p><b>Precio: $ {datos.price}</b></p>
                    <p>Cantidad: {datos.available_quantity}</p>
                    <p>Condicion: {datos.condition}</p>
                    <p><b>Vendidos:</b>{datos.sold_quantity}</p>
                </Card.Text>
                <Button variant="primary">
                    COMPRAR
                </Button>
            </Card.Body>
        </Card>

    )
}

export default SingleProduct;