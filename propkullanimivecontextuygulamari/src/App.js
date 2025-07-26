import React,{ useState } from 'react';
import './App.css';
import Container from './components/container';
import Content from './components/content';

const temastil = {
  dark:{
    color:"white",
    backgroundColor:"black"
  },
  light:{
    color:"black",
    backgroundColor:"White"
  }
}

export const Tema = React.createContext();
function App() {

  const[baslik, setBaslik] = useState("React Props İle Componentlar arasında veri transferi")
  const sayi = 1881;

  const[deger,setDeger] = useState(temastil.dark);
  function degistir()
  {
    if(temastil.dark===deger){
      setDeger(temastil.light)
    }
    else
    {
      setDeger(temastil.dark)
    }
  }
  return (
    <>
      <div className="App">
        <Container murtaza={baslik} tarih={sayi}/>
        <button onClick={()=> {setBaslik("Başlık Değiştirildi")}}>Başlık Değiştir</button>
      </div>
      <div className="App">
        <Tema.Provider value={deger}>
          <Content/>
        </Tema.Provider>
        <button onClick={degistir}>Tema Değiştir</button>
      </div>
    </>
  );
}

export default App;
