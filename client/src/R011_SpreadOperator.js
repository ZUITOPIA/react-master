import React, { Component } from "react";

class R011_SpreadOperator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // 배열 2개 합치기 : 배열명.concat 함수 -> ...배열명
    const arr1 = ["num1", "num2"];
    const arr2 = ["num3", "num4"];
    const sumArr = [...arr1, ...arr2];
    console.log("sumArr : " + sumArr); // sumArr : num1,num2,num3,num4
    const [sum1, sum2, ...remain] = sumArr;
    console.log("sum1 : " + sum1 + ", sum2 : " + sum2 + ", remain : " + remain); // sum1 : num1, sum2 : num2, remain : num3, num4

    // 객체 2개 합치기 : Object.assign() 함수 -> ...객체명
    const obj1 = {
      key1: "val1",
      key2: "val2",
    };
    const obj2 = {
      key2: "new2",
      key3: "val3",
    };
    const sumObjJs = Object.assign({}, obj1, obj2);
    console.log("sumObjJs : " + JSON.stringify(sumObjJs)); // sumObjJs : {"key1":"val1","key2":"new2","key3":"val3"}

    const sumObjEs = { ...obj1, ...obj2 };
    console.log("sumObjEs : " + JSON.stringify(sumObjEs)); // sumObjEs : {"key1":"val1","key2":"new2","key3":"val3"}

    const { key1, key3, ...others } = sumObjEs;
    console.log(
      "key1 : " +
        key1 +
        ", key3 : " +
        key3 +
        ", others : " +
        JSON.stringify(others)
    ); // key1 : val1, key3 : val3, others : {"key2":"new2"}
  }

  render() {
    return <h2>[THIS IS SpreadOperator]</h2>;
  }
}

export default R011_SpreadOperator;
