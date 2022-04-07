import './App.css';
import {Texto, Salgados} from "./Utils"


const assado = "esfirra."
const frito = "coxinha"


function App() {

  return (
    <div className="box">
      <form>
        <label>Aula</label>
        <input onChange={(e) => { Texto(e.target.value, 'e muito louco') }} />
        <button className="button" onClick={(e) => {Salgados(assado,frito)}}>Enviar</button>
      </form>
    </div>
  );
}

export default App;
