import React, { Component } from 'react';
import img from '../images/BlueBackground.jpg';

class Section1 extends Component {
    render(){
        return (
            <div className="Section1"> 
               <img src={img} alt="Background" />
            </div>
        );
    }
}

export default Section1;