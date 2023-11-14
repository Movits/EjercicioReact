import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador+1);
  }

  return (
    <>
      <h1>Hola!</h1>
      <button onClick={aumentar}>Boton</button>
      <h2>{contador}</h2>
    </>
  )
}

export default App
