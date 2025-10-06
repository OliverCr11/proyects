import React from "react";

const InputText = ({ userInput, setUserInput }) => {
    return (
        <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="type here"
            autoFocus 
        />
    );
};

export default InputText;