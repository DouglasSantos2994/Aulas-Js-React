import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/index';
import Futebol from './pages/Futebol'
import Basquete from './pages/Basquete';
import Volei from './pages/Volei';
import Surf from './pages/Surf';



function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/futebol' element={<Futebol/>} />
        <Route path='/basquete' element={<Basquete/>} />
        <Route path='/volei' element={<Volei/>} />
        <Route path='/surf' element={<Surf/>} />
      </Routes>
      
     
      
    </BrowserRouter>
  )
}

export default App;