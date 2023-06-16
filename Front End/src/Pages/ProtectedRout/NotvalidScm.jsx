import React from 'react'
import { Navigate } from 'react-router-dom';
export default function NotvalidScm({userEmail,children}) {
    if(localStorage.getItem("email") === "scm@email.com")
    {
 return <Navigate to='/error'/>

    }
    else{

        return children;

    }
    
 
}
