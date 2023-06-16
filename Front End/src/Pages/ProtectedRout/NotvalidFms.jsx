import React from 'react'
import { Navigate } from 'react-router-dom';
export default function NotvalidFms({userEmail,children}) {
    if(localStorage.getItem("email") === "fms@email.com")
    {
 return <Navigate to='/error'/>

    }
    else{

        return children;

    }
    
 
}
