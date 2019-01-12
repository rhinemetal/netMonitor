import React from "react";
import ComponentNetMonitor1 from './netmonitor/one';
import ComponentNetMonitor2 from './netmonitor/two';
import ComponentNetMonitor3 from './netmonitor/three';
import ComponentNetMonitor4 from './netmonitor/four';
import ComponentNetMonitor5 from './netmonitor/five';
import ComponentNetMonitor6 from './netmonitor/six';
import { Route } from 'react-router-dom';

export default class ComponentNetMonitor extends React.Component{

  render(){
    return(
      <div className="netMonitor">
        <Route exact path="/netmonitor/1" component={ComponentNetMonitor1} />
        <Route exact path="/netmonitor/2" component={ComponentNetMonitor2} />
        <Route exact path="/netmonitor/3" component={ComponentNetMonitor3} />
        <Route exact path="/netmonitor/4" component={ComponentNetMonitor4} />
        <Route exact path="/netmonitor/5" component={ComponentNetMonitor5} />
        <Route exact path="/netmonitor/6" component={ComponentNetMonitor6} />
      </div>
    )
  }

}
