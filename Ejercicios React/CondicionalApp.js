import React, { useState }from "react";

function CondicionalApp () {
    //declara el estado y le asigna el valor inicial true
    const [condicion, setCondicion] = useState(true);

    //funcion para cambiar el estado
    const cambiarEstado = () => {
        setCondicion(!condicion);
    }

    return(

        <div>
           <h2>Condicional App </h2>
           <h3>{condicion}</h3>
           {
               condicion ? <h3>Verdadero</h3> : <h3>Falso</h3>
           }
           <button onClick={cambiarEstado}>CAMBIAR</button>
        </div>
    )
}

export default CondicionalApp;