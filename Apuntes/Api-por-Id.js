/*------------------------------------------------------
  usamos el Link para redirigar al elemento por id
  primero lo importamos al componente
  import { Link } from "react-router-dom"

  segundo lo llamamos desde un boton o link
  <button><Link to={'/product/' + item.id}>Ver Detalle</Link></button>

  desde la ruta de navegacion pasamos el parametro ID
  <Route exact path="/product/:id" element={<ProductById />}/>
  
--------------------------------------------------------
  usamos el argumento useParams 
  import { useParams } from "react-router-dom"

  
  lo declaramos
  const { id } = useParams();

  lo pasamos como parametro a la url
  const url = 'https://api.mercadolibre.com/items/'+id;


*/
