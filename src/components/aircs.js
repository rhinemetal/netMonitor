import React from "react";
import ComponentAirCS_T1 from './aircs/t1';
import ComponentAirCS_T2in from './aircs/t2in';
import ComponentAirCS_T2out from './aircs/t2out';
import { Route } from 'react-router-dom';

export default class ComponentAirCS extends React.Component{

  render(){
    return(
      <div className="airCS">
        <Route exact path="/aircs/t1" component={ComponentAirCS_T1} />
        <Route exact path="/aircs/t2in" component={ComponentAirCS_T2in} />
        <Route exact path="/aircs/t2out" component={ComponentAirCS_T2out} />
      </div>
    )
  }

}
