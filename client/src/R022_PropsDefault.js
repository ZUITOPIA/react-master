import React, { Component } from "react";

class R022_PropsDefault extends Component {
  render() {
    const { ReactString, ReactNumber } = this.props;

    return (
      <div style={{ padding: "0px" }}>
        {ReactString}
        {ReactNumber}
      </div>
    );
  }
}

R022_PropsDefault.defaultProps = {
  ReactString: "리액트",
  ReactNumber: 400, // 기본값이 400으로 설정되는 것 뿐, props={100} 하면 100으로 변경됨!
};

export default R022_PropsDefault;
