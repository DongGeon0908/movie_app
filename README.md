 MOVIE APP 만들기 with react.js
 ==============================
react를 사용해서 영화APP 만들기 기초!
-----------------------------------

### 개발환경
```
react.js
node.js
npm
npx
```

<hr/>

### REACT란?
- 리액트는 페이스북에서 제공해주는 프론트엔드 라이브러리
- 리액트는 컴포넌트 기반으로 되어있어서 컴포넌트에 데이터를 내려주면 개발자가 설계한대로 UI가 만들어져 사용자에게 제공
- 리액트는 컴포넌트를 개발하는것!! 모든 것이 컴포넌트로 구성
- 컴포넌트를 구현하고 Virtual DOM으로 실행
- 실행된 내용을 실제 DOM에 올리는 구조가 리액트
    + 컴포넌트란?
        * 모듈 내에서 재사용이 가능한 최소 단위
            - 모듈이란?
                * 특정 기능을 온전히 수행할 수 있도록 만들어진 단위
        * 쉽게 풀어서 HTML을 반환하는 함수!
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

- JSX란?
    + javascript와 html 사이의 조합
    + 리액트에서만 사용하는 유일한 개념
    + Javascript안의 HTML

<hr/>

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

### Component를 만드는 방법
- src 폴더 아래에 새로운 js파일을 생성!
```
import React from 'react';
```
위의 코드를 추가하지 않으면 리액트는 해당 js의 컴포넌트를 인식하지 못합

##### Hello.js
```
import React from 'react';

function Hello(){
    return <h3>동건이의 리엑트 도전</h3>;
}

export default Hello;
```
- 기본적인 컴포넌트를 생성하는 방식!
- function을 제작한 이후에는 export를 통해 Hello컴포넌트를 등록해야함!

##### index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hello from './Hello';


ReactDOM.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  document.getElementById('root')
);
```
- App 컴포넌트 대신에 Hello 컴포넌트를 삽입

#### 주의사항 
- react application은 하나의 Component만을 rendering함!
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hello from './Hello';


ReactDOM.render(

    <App/>
    <Hello />
 ,
  document.getElementById('root')
);
```
- 위의 코드처럼 두개의 컴포넌트를 연관성 없이 실행하는 것은 오류 발생!
    + 이를 해결하기 위해서 컴포넌트 안에 컴포넌트를 실행!


- 컴포넌트 생성을 간단하게 하는 방법 1
```
import React from 'react';

export default () =><div>Hello World</div>;
```

- 컴포넌트 생성을 간단하게 하는 방법 2
```
import React from 'react';

export default () =>(<div>Hello World</div>);
```

- 컴포넌트 생성을 간단하게 하는 방법 3
```
import React from 'react';

export default () =>{
    return <div>Hello World</div>
    };
```
- 만약 하나의 js파일에 여러개의 컴포넌트를 생성하고 싶으면?
```
export default App;
export default Hello;
```
- 하나의 파일에 여러 컴포넌트를 생성할 경우에 다른 파일에서 해당 컴포넌트를 주입시키기 위해서는 아래의 구조를 따른다.
```
import {App} from './App';
```
- 그러나 위의 export 방식은 선호하는 방식이 아님

```
export default Hello =() => {
  return (
    <div >
    Hello World
</div>
  )
};
```
- export를 하는 동시에 선언함

- 주의사항
    + () -> return X
    + {} -> return O


### 질문사항/
-  <React.StrictMode>?
```
<React.StrictMode>
    <Hello />
    <App />
  </React.StrictMode>
```
- 이런 경우는 왜 두개의 컴포넌트 모두 실행 가능한 것인가?
    + 리엑트에서 컴포넌트를 랜더링 할때는 하나의 컴포넌트만 가능하다.
```
ReactDOM.render(

    <App/>
    <Hello />
 ,
  document.getElementById('root')
);
```
- 위의 코드처럼 두개의 컴포넌트를 랜더링할 수 없다. 이런 이유로 2개 이상의 컴포넌트를 랜더링할 때는 태그를 사용해서 묶는다.
```
ReactDOM.render(
<>
    <App/>
    <Hello />
</>
 ,
  document.getElementById('root')
);
```
- 리엑트가 하나의 컴포넌트로 인식할 수 있게 태그로 묶는다!

<hr />

### Component에서 Component
- App Component에서 Hello Componet로 정보를 보내고 Hello Component에서 받은 정보를 사용하는 방법 
- App Component는 부모 Component이다!. App Component에서 보낸 props를 Hello Component 받을 수 있다. 밑의 코드를 확인하자!
```
import React from 'react';

function Hello(props){
  console.log(props);
  return <h1>동건이의 리엑트 도전기</h1>;
}

function App() {
  return (<div ><h1>Hello World</h1>
  <Hello hello ="hye" something={true} something2={["heeee",1,2,3,4,5,5]} />
  </div>);
}
export default App;

```
- < Hello 뒤에 붙은 코드들이 props로 Hello Component로 전달된다. 이걸 받기 위해서는 function Hello(props)를 사용한다.
- console.log(props)를 사용해서 전달받은 props를 확인할 수 있다.
    + console.log(props)를 확인하면 object에 전달받은 props를 확인할 수 있다.
    + 이러한 기술이 react magic 이다.
#### object에서 hello의 값을 꺼내고 싶으면? 방법1
```
function Hello(props){
  console.log(props.hello);
  return <h1>동건이의 리엑트 도전기</h1>;
}
```
- props.object이름을 추가하자!

#### object에서 hello의 값을 꺼내고 싶으면? 방법2
```
function Hello({ hello }){
  console.log(hello);
  return <h1>동건이의 리엑트 도전기</h1>;
}
```

### 부모 Component에서 전달받은 props를 자식 Component에서 받아서 사용하고 싶으면?
```
function Hello({ hello }){
  return <h1>{ hello } 동건이의 리엑트 도전기</h1>;
}
```
- {} 중가로 안에 props의 이름을 추가하면 데이터 값을 불러올 수 있다.!

#### es6란?
- JavaScript의 최신버전
<hr />

### 주의!
- js는 인터프리터 언어이다. 그러므로 위에서 아래로 향하는 상하관계를 갖는 구조를 갖는다!!
    + 오류가 발생할 경우에 위에서 부터 차근차근 확인!!
- Component는 대문자로 시작해야함!!

