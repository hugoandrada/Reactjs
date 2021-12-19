import '../index.css';
import React, { useState, useEffect } from "react";
import ProductList from "../Components/ProductList";

function ProductPage () {

  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetProduct = async () => {
    try {
      const url = 'https://api.mercadolibre.com/sites/MLA/search?q=iphone';
      const datos = await fetch(url);
      const response = await datos.json();
      console.log(response.results);
      setProducto(response.results);
      setLoading(false);

    } catch (error) {
      console.log('error');
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
        <h1>Productos</h1>
        {producto.map(item => <ProductList datos={item} key={item.id} />)}
      </div>
    )
  }
}

export default ProductPage;