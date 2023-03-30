[react-study 2주차]

### Rules of Hooks

react hooks : use함수 (ex. useState, useEffect, useReducer, useContext ...)

1. 리액트 훅은 리액트 함수(react component functions/custom hooks)에서만 호출

```
# hooks 사용 불가능한 경우
const emailReducer = () => {
    return 객체
}

# hooks 사용 가능한 경우
const Login = () => {
    return (<>JSX</>)
}

```

2. 리액트 훅은 reac t component functions 또는 custom hooks의 최상위 수준에서만 호출
   중첩 함수, block 문 등에서 호출 불가능

```
# 중첩 함수 내 사용 불가능
useEffect(() => {
    console.log("hello);

    useContext();           // error!

    return () => {
        console.log("hello);
    }
}, [])

# block 내 사용 불가능
if(true){
    useState();            // error!
}

```
