
import './App.css';
import React, { useState } from 'react';

function App() {

  const [sabores, setSabores] = useState('leite ninho')
  const [bolo, setBolo] = useState('morango')
  const [multiplicar, setmultiplicar] = useState(1)

  function trocaSabores() {
    setSabores('cenoura')
    setBolo('chocolate')
  }

  function multiplicao() {
    setmultiplicar(multiplicar * 4)
  }


  return (
    <>
      <div >
        <p> Eu gosto de bolo de {sabores} com {bolo}.</p>
        <button onClick={() => trocaSabores()} >Bolos</button>
      </div>
      <div >
        <p>{multiplicar}</p>
        <button onClick={() => multiplicao()} >Multiplição</button>
      </div>
    </>
  );
}

export default App;
