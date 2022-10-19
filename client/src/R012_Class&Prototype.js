import React, { Component } from "react";

class ClassPrototype extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Es6
    class ExamCountClass {
      constructor(num2) {
        this.number = num2;
      }
      shownum() {
        console.log(`${this.number}`);
      }
    }

    const count = new ExamCountClass("2hundred");
    count.shownum();
  }

  render() {
    return <h2>[THIS IS Class]</h2>;
  }
}

export default ClassPrototype;
