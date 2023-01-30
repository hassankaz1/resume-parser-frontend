import React, { useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import KeyList from "../KeyList/KeyList";
import "./Search.css"

const Search = () => {
    const history = useHistory();
    const [input_, setinput_] = useState("")
    const [keys, setKeys] = useState([]);

    const [goToNextStep, setNextStep] = useState(false)

    const handleChange = (e) => {
        setinput_(e.target.value);

    }

    const handleAdd = (e) => {
        e.preventDefault();
        let newWords = [...keys, ...input_.split(" ")]
        console.log(newWords);
        let wordSet = new Set(newWords)
        console.log(wordSet);
        wordSet.delete(" ");
        setKeys(Array.from(wordSet));
        setinput_("");
        console.log(keys);
    }

    const handleReroute = (e) => {
        e.preventDefault();
        history.push("/step2");

    }


    return (
        <>
            <div>
                <div className="info">
                    <h2>Step 1</h2>
                    <p>Please enter keywords to search for in resumes! You may enter multiple keywords seperated by space. </p>
                    <p>e.g &#8220;aws python react&#8221; </p>
                </div>
                <form >
                    <div className="wrap">
                        <div className="search">
                            <input className="searchTerm" value={input_} onChange={handleChange}></input>
                            <button className="searchButton" onClick={handleAdd}>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>
                    {keys.length > 0 &&
                        <button className="rank" onClick={handleReroute}>Step 2!</button>
                    }
                </form>
            </div>
            {keys.length > 0 &&
                <div >
                    <div>
                        <KeyList keys={keys} setKeys={setKeys}></KeyList>
                    </div>
                    <div className="add"> <p>You can keep adding more keywords!</p></div>

                </div>
            }
            <div className="nk">
                {keys.length == 0 &&
                    <p >NO KEY WORDS ADDED YET!</p>
                }
            </div>
        </>
    );
}

export default Search