import React from "react";

const WordLegthInput =({wordLength,setWordLegth}) =>{
    return(
        <div className="d-flex justify-content-center align-items-center my-4">
            <label htmlFor="wordLengthInput" className="form-label mb-0 me-3 fw-bold fs-5">
                WORD LENGTH
            </label>
            <input type="number" id="wordLegthInput" className="form-control" style={{width:'80px',fontSize:'1.25rem',textAlign:'center'}}
            value={wordLength}
            onChange={(e)=>setWordLegth(e.target.value)}
            min="5" max="8"/>
        </div>
    )
}
export default WordLegthInput;