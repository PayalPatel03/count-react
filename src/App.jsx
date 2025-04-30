import React, { useEffect, useState } from 'react'
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {

  const[count,setCount]=useState(0);
   const handleRefresh=()=>{
    let oldCount=JSON.parse(localStorage.getItem('count'));
    setCount(oldCount);
   }

  const handleIncrement=()=>{
    let newCount=count+1;
    localStorage.setItem('count',JSON.stringify(newCount));
    setCount(newCount);
  }

  const handleDecrement=()=>{
    let latestCount=count-1;
    localStorage.setItem('count',JSON.stringify(latestCount));
    setCount(latestCount);
  }
  useEffect(()=>{
    handleRefresh();
  },[]);
  return (
    <>
    <div className="container text-center mt-5">
      <h1>Counter</h1>
      <button className="btn  me-3" onClick={handleDecrement}>-</button>
      <span className="fs-3">{count}</span>
      <button className="btn  ms-3" onClick={handleIncrement}>+</button>
    </div>
    </>
  )
}

export default App
