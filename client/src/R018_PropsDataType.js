import React, { Component } from "react";
import datatype from "prop-types";

class R018_PropsDataType extends Component {
  render() {
    const { String, Number, Boolean, Array, ObjectJson, Function } = this.props;
    return (
      <div style={{ padding: "0px" }}>
        <p>String Props : {String}</p>
        <p>Number Props : {Number}</p>
        <span>Boolean Props : {Boolean.toString()}</span>
        <p>Array Props : {Array}</p>
        <p>ObjectJson Props : {JSON.stringify(ObjectJson)}</p>
        <p>Function Props : {Function}</p>
      </div>
    );
  }
}

R018_PropsDataType.propTypes = {
  // class 보다 아래에 선언
  String: datatype.string,
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  ObjectJson: datatype.object,
  Function: datatype.func,
};

export default R018_PropsDataType;
