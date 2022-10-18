import React, { Component } from "react";

class R008_LifecycleEx extends Component {
  constructor(props) {
    // 생성(mount)
    // component 내부에서 사용되는 변수(state)를 선언, 부모 객체에서 전달받은 변수(props)를 초기화 함
    super(props);
    this.state = {};
    console.log("1. constructor CALL");
  }
  static getDerivedStateFromProps(props, state) {
    // 생성(mount) 혹은 변경(update)
    // 새로운 props를 받게 됐을 때 state를 변경해줌
    console.log("2. getDerivedStateFromProps CALL : " + props.prop_value);
    return { tmp_state: props.prop_value };
  }
  render() {
    // 생성(mount) 혹은 변경(update)
    // 리턴되는 html 형식의 코드를 화면에 그려주는 함수 (화면 내용이 변경돼야 할 시점에 자동 호출됨)
    console.log("3. render CALL");
    return <h2>[THIS IS shouldComponentUpdate FUNCTION]</h2>;
  }
  componentDidMount() {
    // 생성(mount)
    // 화면이 모두 그려진 후 실행되는 이벤트 처리, 초기화에 활용
    console.log("4. componentDidMount CALL");
    console.log("5. tmp_state : " + this.state.tmp_state);
    this.setState({ tmp_state: true });
  }
  shouldComponentUpdate(props, state) {
    // 변경(update)
    // props or state의 변경
    console.log(
      "6. shouldComponentUpdate CALL / tmp_state2 = " + state.tmp_state2
    );
    return state.tmp_state2;
  }
}

export default R008_LifecycleEx;

// 복습 : react에서 생명주기란, component의 생성-변경-소멸의 과정을 뜻함
