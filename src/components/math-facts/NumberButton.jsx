import React from "react";
const NumberButton = (props) =>{
    return(
       <button className="btn btn-primary"
      onClick={() => {props.handleClick(props.value)}}>
        {props.value}
    </button>
    )
}
export default NumberButton;