import React, { Component } from "react";

class R010_Variable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var varName = "react";
    console.log("varName1 : " + varName); // react
    var varName = "200";
    console.log("varName2 : " + varName); // 200

    let letName = "react";
    console.log("letName1 : " + letName); // react
    // let letName = "200" -> Parsing error
    letName = "react200";
    console.log("letName2 : " + letName); // react200

    const constName = "react";
    console.log("constName : " + constName); // react
    // const constName = "200" -> Parsing error
    constName = "react200"; // Uncaught TypeError
  }

  render() {
    return <h2>[THIS IS Variable]</h2>;
  }
}

export default R010_Variable;
