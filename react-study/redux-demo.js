const redux = require("redux"); // 서드파티 패키지를 import 하기 위한 기본 노드 JS import 구문

const counterReducer = (state = { counter: 0 }, action) => {
    // state의 초기값을 먼저 정의해주어야 error 발생하지 않음
    return {
        counter: state.counter + 1,
    };
};

const store = redux.createStore(counterReducer); // 리덕스 라이브러리에서 온 것, 저장소를 생성함

console.log(store.getState());

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber); // counterSubscriber를 직접 실행하지 않는 것이 중요

// counterReducer 와 counterSubscriber 함수는 모두 직접 실행하는 것이 아니라 redux가 실행함

store.dispatch({ type: "increment" });
