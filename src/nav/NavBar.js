import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar({ signout }) {

    const { currUser } = useContext(UserContext);

    function loggedIn() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4 ms-4">
                    <NavLink className="nav-link" to="/companies">
                        Companies
                    </NavLink>
                </li>
                <li className="nav-item mr-4 ms-2">
                    <NavLink className="nav-link" to="/jobs">
                        Jobs
                    </NavLink>
                </li>
                <li className="nav-item mr-4 ms-2">
                    <NavLink className="nav-link" to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signout" onClick={signout}>
                        Sign Out
                    </Link>
                </li>
            </ul>
        )
    }
    function loggedOut() {
        return (
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/login">
                        Log In
                    </NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/signup">
                        Sign Up
                    </NavLink>
                </li>
            </ul>
        )
    }

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                {currUser ?
                    loggedIn()
                    :
                    loggedOut()
                }
            </nav>
        </div >
    )
}

export default NavBar;