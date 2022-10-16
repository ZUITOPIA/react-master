import React, { Component } from "react";

class R006_LifecycleEx extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor CALL");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps CALL " + props.prop_value);
    return {};
    // state를 갱신하기 위한 객체를 반환하거나, null을 반환하여 아무것도 갱신하지 않을 수 있음
  }

  render() {
    console.log("3. render CALL");
    return <h2>[THIS IS RENDER CALL]</h2>;
  }
}

export default R006_LifecycleEx;

// getDerivedStateFromProps 는 시간이 흐름에 따라 변하는 props에 state가 의존하는 아주 드문 사용례를 위하여 존재함 -> 보다 간단한 다른 대안들에 익숙해지는 것을 권장
// 예를 들어, 무엇을 움직이도록 만들지 결정하기 위하여 이전과 현재의 자식 엘리먼트를 비교하는 <Transition>와 같은 컴포넌트를 구현할 때 편리하게 사용

// react 공식문서 참고
// props 변화에 대응한 부수 효과를 발생시켜야 한다면 (예를 들어, 데이터 가져오기 또는 애니메이션), componentDidUpdate 생명주기를 대신해서 사용하세요.
// props가 변화했을 때에만 일부 데이터를 다시 계산 하고 싶다면, Memoization Helper를 대신해서 사용하세요.
// props가 변화할 때에 일부 state를 재설정 하고 싶다면, 완전 제어 컴포넌트 또는 key를 사용하는 완전 비제어 컴포넌트로 만들어서 사용하세요.
