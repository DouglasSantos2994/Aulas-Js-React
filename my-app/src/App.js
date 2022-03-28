import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/index';
import Primeiro from './pages/primeiro/index'
import Segundo from './pages/segundo/';
import Terceiro from './pages/terceiro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Routes>
        <Route path='/primeiro' element={<Primeiro/>} />
      </Routes>
      <Routes>
        <Route path='/segundo' element={<Segundo/>} />
      </Routes>
      <Routes>
        <Route path='/terceiro' element={<Terceiro/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;