import React, { useState, useEffect } from "react";

const CicloDeVida = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    //se ejecuta cada vez que se actualiza el componente
    //porque no tiene ninguna dependencia
    useEffect(() => {
        console.log('Se ejecuta siempre')
    });

    //solo se ejecuta una vez cuando se carga el componente
    useEffect(() => {
        console.log('Solo se ejecuta una vez')
    }, []);

    //se ejecuta solo cuando hay cambios en la depencia que le indiquemos
    //en esta caso el counter1
    useEffect(() => {
        console.log('Depende del counter 1')
    }, [counter1]);

    return (

        <div>
            <h1>Ciclo de vida UseEffect</h1>
            <h1>Clicks {counter1}</h1>
            <h1>Clicks {counter2}</h1>
            <button onClick={() =>
                setCounter1(counter1 + 1)}>
                Increment C1
            </button>
            <button onClick={() =>
                setCounter2(counter2 + 1)}>
                Increment C2
            </button>
        </div>

    )
}

export default CicloDeVida;