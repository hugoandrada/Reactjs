/*--------------------------------------
Podemos usar async await para consultar una api

const NombreFuncionApi = async () => {
    try {
        const url = "url de la api";
        const datos = fetch(url);
        const response = datos.json();
        console.log(response);
        
        //pasamos la respuesta de la api a nuestro estado
        setEstadoApi(response);

    } catch (errores) {
      //aca hacemos el manejo de errores si la consulta api falla
      console.log("error api");
    }
}
-----------------------------------------------
 usamos la funcion async en useEffect

 useEffect(()=> {
     NombreFuncion();
 },[])

*/