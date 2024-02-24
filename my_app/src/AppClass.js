import React, { Component } from "react";
import BoxClass from "./BoxClass";

export default class AppClass extends Component {
  constructor(props) {
    //생성자 라이프사이클
    super(props);
    this.state = {
      conuter2: 0,
      num: 1,
    };
    console.log("constructor");
  }
  handleUpNum = () => {
    this.setState({
      counter2: this.state.conuter2 + 1,
      value: this.state.value + 1,
    });
  };
  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.handleUpNum}>클릭</button>
        <div>state:{this.state.conuter2}</div>
        <BoxClass num={this.state.value} />
      </div>
    );
  }
}
