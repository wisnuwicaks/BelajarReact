import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewScreen from "./views/components/NewScreen"

function App() {
  let arr = [1,2,3]
 
  return (
    <div className="App">
      <h1>Hallo coba nih</h1>
      {/* <NewScreen/> */}
      {arr.map((val)=>{
        return (
        <>
          <p>{val}</p> 
          <NewScreen/>
        </>
        )
      })}

    </div>
  );
}

export default App;
