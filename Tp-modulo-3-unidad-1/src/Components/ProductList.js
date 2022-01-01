import '../index.css';
import React from "react";
import { Link } from "react-router-dom"
import { Card, Button } from 'react-bootstrap';

function ProductList({ datos }) {
    //const { datos } = props



    return (

        /* <article key={datos.id} className="product-list">
            <h3>{datos.title}</h3>
            <p>Precio: $ {datos.price}</p>
            <img src={datos.thumbnail} alt="100px" width="100px" />
            <button className="btn"><Link to={'/product/' + datos.id}>Ver Detalle</Link></button>
           </article> */

        <Card style={{ width: '18rem', margin: '5px' }}>
            <Card.Img variant="top" src={datos.thumbnail} style={{width: '100px'}} />
            <Card.Body>
                <Card.Title>{datos.title}</Card.Title>
                <Card.Text>
                    <p>Precio: $ {datos.price}</p>
                </Card.Text>
                <Button variant="primary" as={Link} to={'/product/' + datos.id}>
                    Detalle
                </Button>
            </Card.Body>
        </Card>

    )
}

export default ProductList;