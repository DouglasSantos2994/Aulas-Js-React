import './App.css';
import Cards from './components/Cards';
import Links from './components/Links';
function App() {

  return (
    <div >
      <Cards textoCard={"Douglas"}/>
      <Cards textoCard={"Diego"}/>
      <Cards textoCard={"Edileide"}/>
      <Cards textoCard={"Edileuza"}/>
      <Links link={true}/>
      <Links link={false}/>
    </div>
  );
}

export default App;
