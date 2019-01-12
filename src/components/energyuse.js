import React from "react";
import ComponentEqu from './energyuse/equ';
import ComponentUnit from './energyuse/unit';
import { Route } from 'react-router-dom';

export default class ComponentEnergyUse extends React.Component{

  render(){
    return(
      <div className="energyUse">
        <Route exact path="/energyuse/unit" component={ComponentUnit} />
        <Route exact path="/energyuse/equ" component={ComponentEqu} />
      </div>
    )
  }

}
