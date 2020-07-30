 MOVIE APP 만들기 with react.js
 ==============================
react를 사용해서 영화APP만들기 기초!
-----------------------------------

### 개발환경
```
react.js
node.js
npm
npx
```

### REACT란?
- 리액트는 페이스북에서 제공해주는 프론트엔드 라이브러리
- 리액트는 컴포넌트 기반으로 되어있어서 컴포넌트에 데이터를 내려주면 개발자가 설계한대로 UI가 만들어져 사용자에게 제공
    + 컴포넌트란?
        * 모듈 내에서 재사용이 가능한 최소 단위
            - 모듈이란?
                * 특정 기능을 온전히 수행할 수 있도록 만들어진 단위
- 라액트의 데이터 흐름은 한 방향으로 진행
    + 위에서 아래로 흐르는 데이터 흐름을 역전시키기 위해서는 특별한 코드를 사용해야함
- Props , State
    + Props란?
        * 부모 컴포넌트에서 자식 컴포넌트로 전달해 주는 데이터
        * 읽기 전용 데이터
        * 자식 컴포넌트에서 전달 받은 props 변경 불가
        * 최상위 부모 컴포넌트만 Props를 변경할 수 있음
    + State란?
        * 동적인 데이터를 다룰 때 사용
        * 사용자와 상호작용을 통해 데이터를 동적으로 변경해야 할 때 사용
        * State는 클래스형 컴포넌트에서만 사용
        * 각각의 State는 독립적이라 다른 컴포넌트의 직접적인 접근 불가
        * 자신보다 상위에 있는 State는 변경이 가능
        * State를 변경하는 함수를 Props로 받는다면 State 변경 가능
- Virtual DOM
    + 가상의 Document Object Model
    + 실제 DOM에서 이벤트들을 적용시키기 전에 Virtual DOM을 만들어 적용시킴
    + 변경된 부분만 실제 DOM에 반영


### react의 실행구조
- react에서 작성한 내용들은 index.html파일의 div태그 안에 주입된다. 주입된 내용들이 우리가 보는 화면!! 
- react는 소스코드에 처음부터 HTML을 넣지 않고, HTML에서 HTML을 추가하거나 제거함!
    + 빈 HTML안에 react로 작성된 Component들을 주입해서 실행시킴!


##### APP.js
```
import React from 'react';

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
```
- 여기서 작성된 내용은 className="APP"을 통해 index.js로 보내진다.

##### index.js 
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```
- index.js파일에서는 APP.js에서 작성했던 functiond을 불어와서 REACTDOM으로 실행시킨다.


##### index.html
```
   <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
```
- index.js에서 불러온 app.js의 내용들을 index.html에 주입한다!