import React from 'react'
import { Navigate } from 'react-router-dom';
export default function ProtectedRout({userdata ,children}) {
    if(!localStorage.getItem("token"))
    {
        console.log(userdata)
        return <Navigate to='/'/>
    }
    return children

 
}
