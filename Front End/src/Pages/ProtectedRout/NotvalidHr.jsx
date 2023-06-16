import React from 'react'
import { Navigate } from 'react-router-dom';
export default function NotvalidHr({userEmail,children}) {
    if(localStorage.getItem("email") === "hr@email.com")
    {
 return <Navigate to='/error'/>

    }
    else{

        return children;

    }
    
 
}
