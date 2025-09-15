import React from "react";
import { Link } from "react-router-dom";
function PlayButton(to) {
    return(
        <div className="d-grid gap2">
            <Link className="btn btn-success" to={to}>
            Play!</Link>
        </div>
    )   
}
export default PlayButton;