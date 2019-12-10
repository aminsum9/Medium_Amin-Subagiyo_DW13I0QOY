import React, { Component } from "react";
import Categorybar from '../Category-bar';
import Contain from "./Category-contain";

class Mobile extends Component{
    render(){
        return(
            <div>
                <Categorybar />
                <Contain />
            </div>
        )
    };
}

export default Mobile;