[react-study 2주차]

### Redux

3가지 원칙

1. Single source of truth
    - 동일한 데이터는 항상 같은 곳(store)에서 가져옴
2. State is read-only
    - 액션이라는 객체를 통해서만 상태 변경이 가능함
3. Changes are made with pure functions
    - 변경은 순수 함수로만 가능
    - store > action > reducer

// 순수함수란 ?
// 동일한 매개변수가 주어지면 항상 동일한 결과를 반환하는 함수 (Side Effect가 없는)
// 순수함수의 장점 ?
// 항상 동일한 결과를 만들어내기 때문에 실행 시점이 중요하지 않고, 다른 순수 함수들과 조합해서 사용하기 용이함 (유지보수 편리)

> store
>
> -   상태가 관리되는 오직 하나의 공간
> -   컴포넌트에서 상태 정보가 필요할 때 스토어에 접근함
>
> action
>
> -   앱에서 스토어에 운반할 데이터를 말함 (주문서)
> -   자바스크립트 객체 형식으로 되어있음
>
> ```
> {
>    type: "ACTION_CHANGE_USER", // 필수
>    payload: {
>        name: "고주희",
>        age: 24
>    }
> }
> ```
>
> reducer
>
> -   action을 전달받고 action의 주문대로 store의 상태를 업데이트함
> -   action을 reducer에게 전달하기 위해서는 dispatch() 메소드를 사용함
>
> ( action > dispatch() > reducer > store )

### 리액트에서 리덕스를 이용한 상태관리하기

1. npm install redux react-redux 로 모듈 설치
2. 코드 분할 - src 폴더 안에 actions, reducers, store, copmponents, pages 분할
    - copmponents 폴더는 프레젠테이션 컴포넌트로, pages 폴더는 컨테이너 컴포넌트로

```
// reducers 폴더 안에 reducers.js => 모든 리듀서를 합쳐준다.

import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
itemReducer,
notificationReducer
});

export default rootReducer;

```

```

// store 폴더 안에 store.js => 스토어를 생성한 후 리듀서를 등록한다.

import { createStore } from "redux";
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);

export default store;

```

1. reducer에서 순수함수로 상태 업데이트

    - Object.assgin() 이용

    > ```
    > // Object.assgin() 사용 방법 예시
    >
    > const obj = { a: 1 };
    > const copy = Object.assign({}, obj);
    > console.log(copy); // { a: 1 }
    > ```

    ```
    // state 상태가 객체 형태라면 리듀서에서 특정 액션에서 리턴할 때

    return Object.assign( {}, state, {새로 업데이트 할 것} );
    ```

    - Spread 문법 이용

    ```
    // state 상태가 객체 형태라면 리듀서에서 특정 액션에서 리턴할 때

    return { ...state, {새로 업데이트 할 것} };
    ```

2. 최상위 index.js 에 스토어를 연결

```

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root')
);

```

5. 하위 컴포넌트에서 스토어에 접근

```

import React from 'react';
import { addToCart } from '../actions/index'; // 액션 가져오기
import { useSelector, useDispatch } from 'react-redux'; // 리덕스 후크 가져오기

function ItemListContainer() {
const state = useSelector(state => state.itemReducer); // 스토어에서 itemReducer로 등록된 상태 가져오기
const { items, cartItems } = state; // 상태가 객체이고 구조분해 한다.
const dispatch = useDispatch(); // 상태 업데이트 할 dispatch() 메소드 가져오기
// 클릭 이벤트
const handleClick = (item) => {
dispatch(addToCart(item.id)); // dispatch()를 이용해서 action을 리듀서에 전달
}
... 생략
}

```

---

### Recoil

context API 기반으로 구현된 함수형 컴포넌트에서만 사용 가능한 라이브러리 (페이스북에서 만듦)
호환성과 단순함을 위해 react에 내장된 상태 관리 기능을 사용하는게 바라직함
(hooks나 context API를 사용하여 상태 관리를 할 수 있는데 그런 경우 여러가지 한계가 존재함)

특징

1. 비동기 처리를 기반으로 작성되어 동시성 모드를 제공하기 때문에 Redux와 같이 다른 비동기 처리 라이브러리에 의존할 필요가 없음
    - concurrent mode : 흐름이 여러 개가 존재하는 경우
      (리액트에서 렌더링의 동작 우선순위를 정하여 적절한 때에 렌더링해줌)
2. atom -> selector를 거쳐 컴포넌트로 전달되는 data-flow (복잡하지 않음)
3. store같은 외부 요인이 아닌 react 내부 상태를 활용하고 context API를 통해 구현되어있기 때문에 리액트와 더 가까운 라이브러리임

---

### Redux의 장점과 단점 표로 보기

|      |                                                          redux                                                          |                                                                                    recoil                                                                                    |
| :--- | :---------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| 장점 |                       순수함수를 사용하기 때문에 상태를 예측 가능, 유지보수에 용이, 디버깅에 유리                       |                                          react의 useState 훅과 비슷하게 동작하는 직관적이고 간단한 구조 (상대적으로 코드 양이 적음)                                          |
| 단점 | 작은 상태 하나를 변경하려해도 actions, reducer, type 등 보일러플레이트 코드를 많이 작성해야 함 (상대적으로 코드가 많음) | snapshot이라는 개념이 존재하지만 직관적으로 볼 수는 없어 콘솔을 이용하여 봐야 함, redux처럼 안정적인 Devtool이 아직 없음 (recoilize라는 Devtool이 있으나 작은 버그들이 존재) |

### Redux의 장점과 단점

장점

-   순수함수를 사용하기 때문에 상태를 예측 가능
-   유지보수에 용이
-   디버깅에 유리

단점

-   작은 상태 하나를 변경하려해도 actions, reducer, type 등 보일러플레이트 코드를 많이 작성해야 함 (상대적으로 코드가 많음)

### recoil의 장점과 단점

장점

-   react의 useState 훅과 비슷하게 동작하는 직관적이고 간단한 구조 (상대적으로 코드 양이 적음)

단점

-   snapshot이라는 개념이 존재하지만 직관적으로 볼 수는 없어 콘솔을 이용하여 봐야 함
-   redux처럼 안정적인 Devtool이 아직 없음 (recoilize라는 Devtool이 있으나 작은 버그들이 존재)

### Redux vs Recoil
