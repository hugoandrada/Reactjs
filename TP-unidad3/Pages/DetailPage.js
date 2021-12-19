import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../Components/SingleProduct";

function DetailProductPage() {

    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    //console.log("id", id)

    useEffect(() => {
        const GetProductById = async () => {
            try {
                const url = 'https://api.mercadolibre.com/items/' + id;
                const datos = await fetch(url);
                const response = await datos.json();
                console.log(response);
                setProducto(response);
                setLoading(false);

            } catch (error) {
                alert('error');
            }
        }
        GetProductById();
    }, [id]);  //cargar la funcion dentro del useEffect para corregir 
                //erro de missing dependencias

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
                <SingleProduct datos={producto} />
            </div>
        )
    }
}

export default DetailProductPage;