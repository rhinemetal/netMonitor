import React from 'react';
import ReactDOM from 'react-dom';
import ComponentOvTop from './overview/top';
import ComponentOvSpace from './overview/space';
import ComponentOvL1A from './overview/l1_1';
import ComponentOvL1B from './overview/l1_2';
import ComponentOvL1C from './overview/l1_3';
import ComponentOvL1D from './overview/l1_4';
import ComponentOvL2A from './overview/l2_1';
import ComponentOvL2B from './overview/l2_2';
import ComponentOvL3A from './overview/l3_1';
import ComponentOvL3B from './overview/l3_2';
import ComponentOvL4A from './overview/l4_1';
import ComponentOvL4B from './overview/l4_2';
import ComponentOvL4C from './overview/l4_3';
import ComponentOvL4D from './overview/l4_4';

export default class Overview extends React.Component{



  render(){
    const styleComponent = {
      overview: {
        width: "100%",
        height: "100%",
        background: "radial-gradient(#192A79 20%,  #13244E 40%)",
        position: "relative",
        display: "inline-block",
        zIndex: 1
      }
    };

    return(
      <div style={styleComponent.overview} className="overview">

        {/* 顶部 */}
        <ComponentOvTop />

        {/* 中部 */}
        <ComponentOvSpace />

        {/* 第一行 */}
        <ComponentOvL1A />
        <ComponentOvL1B />
        <ComponentOvL1C />
        <ComponentOvL1D />

        {/* 第二行 */}
        <ComponentOvL2A />
        <ComponentOvL2B />

        {/* 第三行 */}
        <ComponentOvL3A />
        <ComponentOvL3B />

        {/* 第四行 */}
        <ComponentOvL4A />
        <ComponentOvL4B />
        <ComponentOvL4C />
        <ComponentOvL4D />

      </div>
    )

  }
}
