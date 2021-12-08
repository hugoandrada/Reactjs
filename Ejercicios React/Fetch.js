import React, { useState, useEffect } from "react";

const FetchCard = () => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    //peticion a la Api
    const getUser = async () => {
        //usuario random por id
        const random = Math.floor(Math.random() * 10) + 1;
        const url = 'https://jsonplaceholder.typicode.com/users/' + random;
        const res = await fetch(url);
        const users = await res.json();
        setUser(users)
        setLoading(false)
    }

    //ejecuta la funcion la primera vez
    useEffect(() => {
        getUser();
        
    }, [])

    if (loading) {
        return <h2>Loading....</h2>

    } else {

        return (
            <div>
                <h1>Fetch UserEffect</h1>
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
                <button onClick={getUser}>
                    Random Users
                </button>
            </div>
        )
    }
}

export default FetchCard;