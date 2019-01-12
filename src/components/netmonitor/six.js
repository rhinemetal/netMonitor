import React from 'react';
import ReactDOM from 'react-dom';
import ComponentNetMonitorRouter from './router';
import img from '../../images/south_area.png';


export default class ComponentNetMonitor6 extends React.Component{

  constructor() {
    super();
    this.state = {
      pageTitle: "10kV南区开关站主接线图"
    }
  }


  render(){
    const styleComponent = {
      picOne: {
        width: "1753px",
        height: "860px",
        backgroundImage: 'url(' + img + ')',
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        position: "relative"
      }
    };

    return(
      <div className="netMonitor">
        <ComponentNetMonitorRouter menuName={this.state.pageTitle} />
        <h1>{this.state.pageTitle}</h1>
        <article className="picCon">
          <div style={styleComponent.picOne}></div>
        </article>
      </div>
    )
  }
}
