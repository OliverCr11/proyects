import React from "react";
 import { Link } from "react-router-dom";
 const Button = ({to}) =>{
    return(
        <div className="d-grid gad1">
            <Link className="btn btn-success" to={to}>Go</Link>
        </div>
    )
 }
 export default Button;