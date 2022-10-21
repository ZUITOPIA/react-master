import React, { Component } from "react";

class R017_Props extends Component {
  render() {
    let props_value = this.props.props_val; // const 가 아닌 let이어야 아래에서 변경가능
    props_value += " from App.js";

    return <div>{props_value}</div>;
  }
}

export default R017_Props;
