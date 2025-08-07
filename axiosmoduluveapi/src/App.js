import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [veri, setVeri] = useState("deneme");
  const [id, setID] = useState(0);

  useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(murtaza => setVeri(murtaza.data[id]))
  },[veri])
  return (
    <div className="App">
      <input type='text' value={id} onChange={deger=> setID(deger.target.value)}></input>
      <p>ID = {veri.id}</p>
      <p>UserID = {veri.userId}</p>
      <p>Başlık = {veri.title}</p>
      <p>İçerik = {veri.body}</p>
    </div>
  );
}

export default App;
