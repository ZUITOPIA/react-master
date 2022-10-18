import React, { useEffect, useState } from "react";

export function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // componentDidMount
  // useEffect(() => {
  //   console.log("The useEffect ran");
  // }, []);

  // componentDidUpdate
  // useEffect(() => {
  //   console.log("The useEffect ran");
  // }, [count1, count2]);

  // componentWillUnmount
  useEffect(() => {
    console.log("The useEffect ran");
    return () => {
      console.log("The return is being ran");
    };
  }, []);

  // cleanup function
  // useEffect(() => {
  //   console.log("The count has updated");
  //   return () => {
  //     console.log(`we are in the cleanup - the count is ${count1}`);
  //     console.log(`we are in the cleanup - the count is ${count2}`);
  //   };
  // }, [count1, count2]);

  return (
    <>
      <>
        <h3>Counter</h3>
        <p>current count1 : {count1}</p>
        <p>current count2 : {count2}</p>
        <button onClick={() => setCount1(count1 + 1)}>count1 up</button>
        <button onClick={() => setCount2(count2 + 1)}>count2 up</button>
      </>
    </>
  );
}
