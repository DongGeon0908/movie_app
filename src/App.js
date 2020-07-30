import React from 'react';

function Hello({ hello }){
  return <h1>{ hello } 동건이의 리엑트 도전기</h1>;
}

function App() {
  return (<div ><h1>Hello World</h1>
  <Hello hello ="hye" />
  </div>);
}
export default App;
