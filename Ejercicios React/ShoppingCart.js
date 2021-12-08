import React, { useState } from "react";

const InicialCart = [
    { id: 1, titulo: 'product 1', content: 'contenido 1' },
    { id: 2, titulo: 'producto 2', content: 'contendio 2' }
]

function ShoppingCart() {
    //iniciando estado
    const [cart, setCart] = useState(InicialCart);

    // eliminar un elemento del objeto
    const Eliminar = (prodId) => {
        // recorre el obejot y busca el mismo id que le pasamos en la funcion
        const borrarCart = cart.filter(product => product.id !== prodId)
        // actualiza el setState del cart
        setCart(borrarCart);
    }

    // agregar un nuevo producto
    const AddProduct = () => {
        const newItem = [
            //el operador spread copia el objeto anterior
            ...cart, {
                id: Date.now(),// genera in ID aleatoria con la fecha actual
                titulo: 'Producto 3',
                content: 'Contenido 3'
            }];
        //actuliza el estado
        setCart(newItem)
    }

    return (
        <div>
            <h2>Shopping Cart</h2>

            <button onClick={AddProduct}>
                Agregar</button>

            {cart.map(
                product => (
                    <div key={product.id}>
                        <h4>{product.id} {product.titulo}</h4>
                        <h4>{product.content}</h4>
                        <button onClick={() => Eliminar(product.id)}>
                            Borrar</button>
                    </div>
                )
            )}
        </div>
    )
}

export default ShoppingCart;