import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/index';
import Lojas from './pages/Lojas'




function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Lojas' element={<Lojas/>} />
      </Routes>
      
     
      
    </BrowserRouter>
  )
}

export default App;