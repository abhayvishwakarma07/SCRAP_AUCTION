import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    localStorage.removeItem("address");
    localStorage.removeItem("city");
    localStorage.removeItem("email");
    localStorage.removeItem("gender");
    localStorage.removeItem("info");
    localStorage.removeItem("mobile");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
  return (
    <div>
       <Navigate to='/login'/>
    </div>
  )
}
