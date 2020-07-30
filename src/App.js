import React from 'react';
import PropTypes from "prop-types";

function Hello({ name,id, idw,rating}){
return <h1>{ name }{idw} {rating}동건이의 리엑트 도전기{id}</h1>;
};

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  idw: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
};

const say = [
  {idw:"a", name: "hello", id: "1", rating : 10},
  {idw:"b", name:"zeronimo", id: "2", rating : 20},
  {idw:"c",name: "good",id:"3", rating : 2},
  {idw:"d",name:"bye",id:"4", rating : 1222}
]

function rendersay(word){
  console.log(word);
  return <Hello key={word.idw} name={word.name} id={word.id} rating={word.rating}/>
};


function App() {
  return (
  <div >
 {say.map(rendersay)}
  </div>);
}
export default App;
