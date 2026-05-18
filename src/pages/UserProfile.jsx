import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";

export default function UserProfile(){

    const params = useParams()
    const users = useOutletContext()

    const user = users.find(user => user.id === parseInt(params.id)) 

    console.log(user);

    return(
        <>
            <main>
                {user.name ? <h1>{user.name}</h1> : <h1>Loading...</h1>}
            </main>
        </>
    )
}