import React, { Component } from "react";

class R007_LifecycleEx extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor CALL");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps CALL" + props.prop_value);
    return { tmp_state: props.prop_value };
  }

  render() {
    console.log("3. render CALL");
    return <h2>[THIS IS COMPONENTDIDMOUNT FUNCTION]</h2>;
  }

  componentDidMount() {
    console.log("4. componentDidMount CALL");
    console.log("5. tmp_state: " + this.state.tmp_state);
  }
}

export default R007_LifecycleEx;
