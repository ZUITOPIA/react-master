import React, { Component } from "react";

class R005_LifecycleEx extends Component {
  constructor(props) {
    // constructor 함수 : 맨 처음 생성될 때 한 번만 호출, this.state에 객체를 할당하여 지역 state를 초기화
    super(props); // constructor() 함수를 정의할 때, super() 함수를 가장 위에서 호출해야 함
    this.state = {};
    console.log("5. constructor CALL");
  }
  render() {
    console.log("3. render CALL");
    return <h2>[THIS IS CONSTRUCTOR CALL]</h2>;
  }
}

export default R005_LifecycleEx;

// 리액트의 핵심 : component
// component는 생명주기(Life cycle : 생성(mount) -> 업데이트(update) -> 제거(unmount) 의 과정)를 가짐
// 각각의 과정마다 특정 함수(메서드)를 실행하며 그 함수들을 생명주기 함수라고 함
// 생명주기 함수는 총 9개
// 생성 : constructor(), getDerivedStateFromProps(), render(), componentDidMount() 순서대로 호출
// 업데이트 : getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate() 순서대로 호출
// 제거 : componentWillUnmount()
