import { Fragment } from "react";
import React from "react";
const Equation = (props) =>{
    return(
        <Fragment>
        <div className="col-5">{props.question}</div>
        <div className="col-5">{props.answer}</div>
        </Fragment>
    )
}
export default Equation;