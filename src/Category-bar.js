import React, { Component } from "react";
import { Link } from "react-router-dom";
import Web from "./Category/Web";
import Network from "./Category/Network";
import Mobile from "./Category/Mobile";
import "./App.js";

class Categorybar extends Component{
    render(){
        return(
            <div>
                 <nav className="app-nav-home">
                    <Link to="/Home" className="nav-link-home">Home</Link>
                    <Link to="/Web" className="nav-link-home">Web Programming</Link>
                    <Link to="/Network" className="nav-link-home">Network</Link>
                    <Link to="/Mobile" className="nav-link-home">Mobile</Link>
                    <h1>MasterCode</h1>
               </nav>
            </div>
        )
    };
}

export default Categorybar;