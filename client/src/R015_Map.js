import React, { Component } from "react";

class Map extends Component {
  componentDidMount() {
    const Map_Arr = [3, 2, 8, 8];
    const Map_newArr = Map_Arr.map((x) => x);
    console.log("1. Map_newArr : [" + Map_newArr + "]"); // 1. Map_newArr : [3,2,8,8]

    const Map_multiArr = Map_Arr.map((x) => x * 2);
    console.log("2. Map_mulitArr : [" + Map_multiArr + "]"); // 2. Map_multiArr : [6,4,16,16]

    const ObjArray = [
      { key: "react", value: "200" },
      { key: "리액트", value: "TwoHundred" },
    ];
    const Map_objArr = ObjArray.map((obj, index) => {
      console.log(index + 3 + ". obj : " + JSON.stringify(obj)); // 3. obj :  { key: "react", value: "200" } // 4. obj : { key: "리액트", value: "TwoHundred" }
      const Obj = {};
      Obj[obj.key] = obj.value;
      return Obj; // 새로운 Obj 객체에 기존 key, value 저장함
    });
    console.log("5. Map_objArr : " + JSON.stringify(Map_objArr)); // 5. Map_objArr : [{"react":"200"},{"리액트":"TwoHundred"}]
  }

  render() {
    return <h2>[THIS IS Map]</h2>;
  }
}

export default Map;
