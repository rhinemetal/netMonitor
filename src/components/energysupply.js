import React from 'react';
import ReactDOM from 'react-dom';
import img from '../images/temp/01.jpg';
import API from './api';

export default class ComponentEnergySupply extends React.Component{
  render(){
    const styleComponent = {
      imgBg: {
        width: "100%",
        height: "100%",
        backgroundImage: 'url(' + img + ')',
        backgroundPosition: "15px 15px",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        top: "0",
        left: "0"
      }
    }

    return(
      <section className="grey energySupply">
        <div style={styleComponent.imgBg}></div>
      </section>
    )
  }
}
