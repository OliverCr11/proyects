import React from "react";
import { Link } from "react-router-dom";
import MathInstructions from "./MathInstructions";
import GoButton from "./GoButton";
import SelectInput from "./SelectInput";
const MathFacts=({ operation, setOperation, maxNumber, setMaxNumber })=>{
    const operations = [
  ['Addition', '+'],
  ['Subtraction', '-'],
  ['Multiplication', 'x'],
  ['Division', '/']
    ];
    const numbers=[];
    for(let number =2;number <= 100; number++){
        numbers.push([number,number]);
    }
    return(
        <div className="container mt-4">
            <h1 className="my-4">Math Facts Practice</h1>

     <div className="row mx-1 my-3">
        <SelectInput label="Operation"
          id="operation"
          currentValue={operation} 
          setCurrentValue={setOperation}
          values={operations} />
      </div>
      <div className="row mx-1 my-3">
        <SelectInput label="Maximum Number"
          id="max-number"
          currentValue={maxNumber}
          setCurrentValue={setMaxNumber}
          values={numbers} />
      </div>   
            <GoButton to={'/math-facts/play'}/>

            <MathInstructions/>
        </div>
    )
}
export default MathFacts;