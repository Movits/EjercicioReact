import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const API = "https://pokeapi.co/api/v2/pokemon/ditto";
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("def nombre");
  const [img, setImg] = useState("def img");

  useEffect(()=>{
    async function fectchApi() {
      const res = await fetch(API);
      let info = "def info";
      if (res.ok) {
        info = await res.json();
        setNombre(info.name)
        setImg(info.sprites.front_default);
      }
    }

    fectchApi();
  });

  function aumentar() {
    setContador(contador+1);
  }

  return (
    <>
      <h1>Hola!</h1>
      <button onClick={aumentar}>Boton</button>
      <h2>{contador}</h2>
      <h2>{nombre}</h2>
      <img src={img} alt="" />
    </>
  )
}

export default App
