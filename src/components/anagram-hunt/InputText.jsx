import React from "react";
import 
const InputText =()=>{
    return(
        <div className="my-4">
            <label htmlFor="anagramInput" className="form-label">
            Your Anagrams (one per line):
            </label>
            <textarea
            id="anagramInput" className="form-control" rows={5}
            value={userInput}
            onChange={(e)=>setUserInput(e.target.value)}
            />
        </div>

    )
}
export default InputText;