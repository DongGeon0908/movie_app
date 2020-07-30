import React from 'react';

function Hello({ name,id}){
return <h1>{ name } 동건이의 리엑트 도전기{id}</h1>;
}

const say = [{idw:"a", name: "hello", id: "1"},{idw:"b", name:"zeronimo", id: "2"},{idw:"c",name: "good",id:"3"},{idw:"d",name:"bye",id:"4"}]

function rendersay(word){
  console.log(word);
  return <Hello key={word.idw} name={word.name} id={word.id} />
}

function App() {
  return (
  <div >
 {say.map(rendersay)}
  </div>);
}
export default App;
