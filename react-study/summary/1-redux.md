[react-study 1주차] Redux

### redux 란?

-   유동적인 상태 관리 라이브러리
-   애플리케이션을 변경하고 화면에 표시하는 상태를 변경하고 데이터를 관리하는 것
-   애플리케이션에 있는 하나의 중앙 데이터 저장소
-   전체 애플리케이션의 모든 상태(인증 상태, 테마, 입력 상태 등) 저장
-   저장소 전체를 항상 직접 관리할 필요가 없음!
-   동작 방식 : 컴포넌트가 저장소를 구독하고 데이터가 변경될 때 마다 저장소가 컴포넌트에게 알려주면 컴포넌트는 필요한 데이터를 받음
    > Components가 Action 실행  
    > -> Action은 수행해야할 작업을 Reducer function에게 전달  
    > -> Reducer function은 새로운 상태를 뱉어내고 중앙 데이터 저장소 저장소(redux)에 저장하며 기존 상태를 대체함  
    > -> 데이터 저장소의 상태가 업데이트 되면 저장소를 구독중인 Components가 알람을 받게 되고 UI를 업데이트 함
-   규칙 1. 컴포넌트는 저장된 데이터를 직접 조작하지 않음
    -   Reducer Funtion 사용하여 Mutates(=Changes, Updates) Store Data
-   규칙 2. 데이터는 절대 반대 방향으로 흐를 수 없음

##### Reducer Funtion

-   입력을 받고 그 입력을 변환해서 새로운 출력이나 결과를 만들어내는 함수
-   components의 action이 도착할 때 마다 새로운 상태 스냅샷을 뱉어냄
-   항상 어떤 출력(새로운 상태 객체)을 return 해야 함

### local state / cross-component / app-wide state

##### local state

-   데이터가 변경되어서 하나의 컴포넌트에 속하는 UI에 영향을 미치는 상태
-   보통 useState, useReducer 사용
-   예시 : 더보기 버튼

##### cross-component

-   데이터가 변경되어서 다수의 컴포넌트에 속하는 UI에 영향을 미치는 상태
-   예시 : 모달 같은 prop 드릴링이 필요한 경우

##### app-wide state

-   데이터가 변경되어서 애플리케이션의 모든 컴포넌트에 영향을 미치는 상태
-   예시 : 사용자 인증 같은 전체 상태가 변경되는 경우

### react context vs redux

-   공통점 : cross-component / app-wide state 쉽게 관리하도록 해줌
-   두 가지 함께 사용하는 경우도 있음

##### react context 란?

-   react 내장 기능
-   prop 체인이나 prop 드릴링을 하지 않아도 됨
-   Context와 ContentProvider 컴포넌트를 중심으로 상태 관리
-   단점
    -   구현하는 애플리케이션의 종류에 따라 설정이나 상태관리가 복잡해질 수 있음
        -> redux로 대체 사용
        (심하게 중첩된 JSX 코드, 다양하고 많은 ContextProvider, 유지하기 어려운 거대한 하나의 ContextProvider)
-   고빈도 상태 변경 시 사용 금지
