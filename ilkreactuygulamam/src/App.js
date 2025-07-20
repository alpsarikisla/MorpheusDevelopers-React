import React,{ useState } from 'react';
import './App.css';
import EkmekKirintisi from './components/ekmekkirintisi';
import Navbar, { BreadCrumb } from './components/navbar'
function App() {
  const sayi = 15;
  const[deger, setDeger] = useState(0);
  function azalt()
  {
    setDeger(deger - 1);
  }
  const azaltiver=()=>{setDeger(deger -1)}
  return (
    <>
      <div className="App">
        <Navbar/>
        <BreadCrumb></BreadCrumb>
        <h2>React Temellerini Öğreniyorum</h2>
      </div>
      <div className="App">
        <h3>Hiyerarşik kullanım</h3>
        <p>React Fonksiyonlarunın içerisinden mutlaka 1 tag döndürmelidir</p>
        <p>Not: Bu alandaki her div'i ayrı birer nesne olarak düşünebilirsiniz</p>
        <p>React sayesinde mobil programlama yaklaşımına uzaktan bir bakış atıyoruz</p>
        <p>JSX {1+1} Fark ettiniz mi? MVC de html içerisine c# kodlarını nasıl yazıyorduk:D</p>
      </div>
      <div className='App'>
        <span>{sayi}</span>
      </div>
      <div className='App'>
        <button onClick={()=> {setDeger(deger+1)}}>Arttır</button>
        <h3>{deger}</h3>
        <button onClick={azaltiver}>Azalt</button>
      </div>
    </>
  );
}


export default App;


