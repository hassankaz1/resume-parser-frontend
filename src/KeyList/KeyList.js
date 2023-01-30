import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass2, faPlus } from '@fortawesome/free-solid-svg-icons'
import "./KeyList.css"

const KeyList = ({ keys, setKeys }) => {

    return (
        <ul className="klst">
            <h4 className="list-head">Keywords:</h4>

            {
                keys.map(k => (
                    <li className="keys">{k}</li>
                ))
            }
        </ul>
    );
}

export default KeyList