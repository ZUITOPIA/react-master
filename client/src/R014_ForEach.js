import React, { Component } from "react";

class R014_ForEach extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  componentDidMount() {
    const For_Arr = [3, 2, 8, 8];
    const For_newArr = [];

    for (const i = 0; i < For_Arr.length; i++) {
      For_newArr.push(For_Arr[i]);
    }
    console.log("1. For_newArr : [" + For_newArr + "]");
  }

  render() {
    return <h2>[THIS IS ForEach]</h2>;
  }
}

export default R014_ForEach;
