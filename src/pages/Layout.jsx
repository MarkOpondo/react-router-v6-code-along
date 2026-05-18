import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Layout() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/users`)
        .then(response => {
            if(!response.ok) {
                throw new Error("failed to fetch users")
            }
            return response.json()
        })
        .then(data => setUsers(data))
        .catch(error => console.log(error.message))
    },[])

    return(
        <>
            <header>
                <NavBar/>
            </header>
            <Outlet context={users}/>
        </>
    )
}