import React from "react";
import logo from "../components/images/HassanLogo.png";

//react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">

           
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color: "white"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" href="#aboutme">About me</a>
            </li>
             <li className="nav-item">
                <a className="nav-link" href="#experience">Professional Timeline</a>
            </li>
             <li className="nav-item">
                <a className="nav-link" href="#services">Professional Skill-Set</a>
            </li>
             <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            
    </ul>

  </div>
  </div>
</nav>
    )
}

export default Navbar
