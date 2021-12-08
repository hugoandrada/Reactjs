import React, { useState } from "react";

const ProductInicial = {

    titulo: 'El titulo',
    content: 'El contenido',
    parts: {
        parte1: 'Parte 1',
        parte2: 'Parte 2',
    }
}

function ProductoApp() {
    //creando el estado
    const [product, setProduct] = useState(ProductInicial);

    //actualizar el estado del objeto producto
    const UpdateProduct = () => {
        setProduct(
            {
                ...ProductInicial,
                titulo: 'Nuevo Titulo',
                parts: {
                    parte1: 'nuevo contenido 1'
                }
            }
        )
    }

    return (
        <div>
            <h2>ProductoApp</h2>
            <p><strong>{product.titulo}</strong></p>
            <p>{product.content}</p>
            <p>{product.parts.parte1}</p>
            <p>{product.parts.parte2}</p>

            <pre>{JSON.stringify(product, null, 2)}</pre>

            <button onClick={UpdateProduct}>Actualizar</button>
        </div>
    )
}

export default ProductoApp;