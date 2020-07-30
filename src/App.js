import React from 'react';

function Hello({ name,id}){
return <h1>{ name } 동건이의 리엑트 도전기{id}</h1>;
}

const say = [{name: "hello", id: "1"},{name:"zeronimo", id: "2"},{name: "good",id:"3"},{name:"bye",id:"4"}]

function App() {
  return (
  <div ><h1>Hello World</h1>
 {say.map(what => <Hello name={what.name} id={what.id}/>)}
  </div>);
}
export default App;
