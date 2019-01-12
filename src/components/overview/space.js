import React from 'react';

export default class ComponentOvSpace extends React.Component{

  constructor() {
    super();
    this.state = {};
  }

  render(){
    return(
      <div className="center space">
        <i />
        <div className="light h-red light-1" />
        <div className="light v-red light-2" />
        <div className="light v-red light-3" />
        <div className="light h-red light-4" />
        <div className="light v-red light-5" />
        <div className="light v-red light-6" />
        <div className="light v-red light-7" />
        <div className="light v-red light-8" />
        <div className="light v-red light-9" />
        <div className="light v-green light-10" />
        <div className="light v-green light-11" />
        <div className="light v-green light-12" />
        <div className="light v-yellow light-13" />
        <div className="light v-yellow light-14" />
        <div className="light v-yellow light-15" />
        <div className="light h-yellow light-16" />
      </div>
    )
  }
}
