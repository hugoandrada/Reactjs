import React, { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const sumCounter = () => {
        setCounter(counter + 1);
    }

    const rest = () => {
        setCounter(counter - 1);
    }

    const borrar = () => {
        setCounter(0);
    }

    return (
        <div>
            <h2>CounterApp {counter}</h2>
            <button onClick={sumCounter}>SUMAR</button>
            <button onClick={rest}>RESTAR</button>
            <button onClick={borrar}>BORRAR</button>
        </div>
    )
}

export default Counter;