import React from "react";
import { Link } from "react-router-dom";
import MathFacts from "./math-facts/MathFacts";
 function GameSelection(){
    return(
        <div className="container mt-4">
            <div className="text-center mb-5">
                <h1>Play2Learn</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-5 mb-4">
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column text-center">
                            <h5 className="card-title">Anagram Hunt</h5>
                            <p className="card-text">Do you like Scrablle? Words with Friends? Improve how fast you can recognize anagrams in a word with this neat little game!
                            </p>
                            <Link to="/anagram-hunt" className="btn btn-success mt-auto">Play now!</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 mb-4">
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column text-center">
                            <h5 className="card-title">Math Facts Practice</h5>
                            <p className="card-text">Improve your mental math skills with this exciting game!
                            </p>
                            <Link to="math-facts" className="btn btn-success mt-auto">Play now!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }
 export default GameSelection;