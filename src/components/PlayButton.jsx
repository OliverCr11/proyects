import React from "react";
import { Link } from "react-router-dom";
function PlayButton(to) {
    return(
        <div className="d-grid gap2">
            <link className="btn btn-primary btn-lg" to={to}>
            Play!</link>
        </div>
    )   
}
export default PlayButton;