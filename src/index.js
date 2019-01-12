import 'babel-polyfill';
import 'fetch-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ComponentOverView from './components/overview';
import ComponentNetMonitor from './components/netmonitor';
import ComponentAirCS from './components/aircs';
import ComponentEnergySupply from './components/energysupply';
import ComponentEnergyUse from './components/energyuse';
import ComponentNoPage from './components/404';
import './css/index.css';



class Index extends React.Component {
  render() {
    return (
      <Router>
          <Switch>


            {/* 总览 */}
            <Route exact path="/" component={ComponentOverView} />

            {/* 配网 */}
            <Route exact path="/netmonitor/1" component={ComponentNetMonitor} />
            <Route exact path="/netmonitor/2" component={ComponentNetMonitor} />
            <Route exact path="/netmonitor/3" component={ComponentNetMonitor} />
            <Route exact path="/netmonitor/4" component={ComponentNetMonitor} />
            <Route exact path="/netmonitor/5" component={ComponentNetMonitor} />
            <Route exact path="/netmonitor/6" component={ComponentNetMonitor} />

            {/* 空调 */}
            <Route exact path="/aircs" component={ComponentAirCS} />
            <Route exact path="/aircs/t1" component={ComponentAirCS} />
            <Route exact path="/aircs/t2in" component={ComponentAirCS} />
            <Route exact path="/aircs/t2out" component={ComponentAirCS} />

            {/* 供能 */}
            <Route exact path="/energysupply" component={ComponentEnergySupply} />

            {/* 用能 */}
            <Route exact path="/energyuse" component={ComponentEnergyUse} />
            <Route exact path="/energyuse/unit" component={ComponentEnergyUse} />
            <Route exact path="/energyuse/equ" component={ComponentEnergyUse} />

            {/* 404 */}
            <Route component={ComponentNoPage}/>


          </Switch>
      </Router>
    )
  }
}



ReactDOM.render(<Index />, document.getElementById('root'));
