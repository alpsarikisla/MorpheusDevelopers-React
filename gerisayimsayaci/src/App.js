import React,{useEffect, useState} from 'react'
import './App.css';

function App() {

  const [timer, setTimer] = useState(5);

  useEffect(()=>{
    if(timer!== 0)
    {
      const interval = setInterval(()=> {
        setTimer(timer - 1);
      },1000);
      return() => clearInterval(interval);
    }
    else
    {
      document.title="The Bitti";
    }
  })

  return (
    <div className="App">
      <div style={{height:"200px", width:"200px", backgroundColor:"orangered", borderRadius:"50%", margin:"10px auto",color:"white", lineHeight:"200px", fontSize:"30pt", fontWeight:"900"}}>{timer}</div>
    </div>
  );
}

export default App;
