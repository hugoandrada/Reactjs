import React, { useState } from "react";

function ErrorApp () {

    // declara la variable del estado
    const [error, setError] = useState('');

    //funcion que muestra el error
    function NuevoError () {
        setError('Ha ocurrido un error');
    }

    return(
        <div>
            <h2>ErrorApp</h2>
            
            { error && <h2>{error}</h2> }

            <button onClick={NuevoError}>Error Mensaje</button>
        </div>
    )
}

export default ErrorApp;