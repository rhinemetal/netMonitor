import React from 'react';
import ReactDOM from 'react-dom';
import img from '../images/energySupply.jpg';
import API from './api';

export default class ComponentEnergySupply extends React.Component{

  constructor() {
		super();
		this.state = {
			pageTitle: "运行监视-供能监视",
      flow:  "",
      table: ""
		};
	};

  componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
    fetch(API().energySupply, myFetchOptions).then( response => {
      return response.json();
    }).then( data => {
      this.setState({
        flow: data.data.flow,
        table: data.data.table
      });
    }).catch( e => {
      console.log("服务器响应异常");
    });
	};

  render(){
    const styleComponent = {
			imgBg: {
				width: "1340px",
				height: "880px",
        backgroundImage: 'url(' + img + ')',
        backgroundPosition: "50px 20px",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        top: "0",
        left: "0"
			},
      css: [
        { top: "275px", left: "63px" },
        { top: "112px", left: "266px" },
        { top: "25px", left: "520px" },
        { top: "382px", left: "1115px" },
        { top: "634px", left: "1097px" },
        { top: "760px", left: "900px" }
      ]
		};

    const {flow} = this.state;
    const flowStr = flow.length ? flow.map((item, i) => {
        return (
          <span className={ i%2 === 0 ? "dataPoint even":"dataPoint odd"}  key={i} style={styleComponent.css[i]}>{item.name}：<span>{item.value}</span></span>
        )
    }): '没有加载到任何数据';

    const {table} = this.state;
    const tableStr = table.length ? table.map((item, i) => {
        return (
          <li key={i} className={"t"+ (i%2 === 0 ? "1":"2")}>
            <dl>
              <dt>{item.title}</dt>
              <dd>
                <table>
                  <colgroup>
                    <col width="50%" />
                    <col width="50%" />
                  </colgroup>
                  <tbody>
                    {
                        item.list.map((subItem,j) => {
                             return (
                               <tr key={j}>
                                 <td><span className={`p${j+1}`}>{subItem.name}</span></td>
                                 <th>{subItem.value}<em>{subItem.unit}</em></th>
                               </tr>
                             );
                        })
                    }
                  </tbody>
                </table>
              </dd>
            </dl>
          </li>
        )
    }): '没有加载到任何数据';

    return(
      <section className="grey energySupply">
        <div style={styleComponent.imgBg}>{flowStr}</div>
        <ul className="tableCon">{tableStr}</ul>
      </section>
    )
  }
}
