import React, { Component } from "react";

class ArrowFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowFun: "react200",
      num: 3,
    };
  }

  componentDidMount() {
    InnerFunction(100);
    this.OuterArrowFunction(10, 2);
    this.OuterArrowCallbackFunction(1, 2, 3);
    this.OuterFunctionNoBind();
    this.OuterFunctionWithBind();

    function InnerFunction(num1) {
      return console.log(num1 + ". Es5 function");
    }
  }

  OuterArrowFunction = (num1, num2) => {
    const num3 = num1 + num2;
    console.log(num3 + ". ArrowFunction : " + this.state.arrowFun);
  };

  OuterArrowCallbackFunction(num1, num2, num3) {
    const num4 = num1 + num2 + num3;
    setTimeout(() => {
      console.log(num4 + ". Arrow Callback Function : " + this.state.arrowFun);
    }, 100);
  }

  OuterFunctionNoBind() {
    const this_bind = this;
    setTimeout(function () {
      console.log(this_bind.state.num + ". Es5 Callback Function noBind : ");
      console.log(this.state.arrowFun); // undefined 에러 : 원본 객체 손실
    }, 100);
  }

  OuterFunctionWithBind() {
    setTimeout(
      function () {
        console.log("Es5 Callback Function Bind : " + this.state.arrowFun);
      }.bind(this), // 원본 객체가 바인딩 되는 함수를 생성해서 원본 객체 유지
      100
    );
  }

  render() {
    return <h2>[THIS IS ArrowFunction]</h2>;
  }
}

export default ArrowFunction;
