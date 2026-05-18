import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function UserProfile(){
    const [user, setUser] = useState({})

    const params = useParams()
    const userId = params.id

    useEffect(() => {
        fetch(`http://localhost:4000/users/${userId}`)
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.error(error))
    },[userId])

    console.log(user);

    return(
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                {user.name ? <h1>{user.name}</h1> : <h1>Loading...</h1>}
            </main>
        </>
    )
}