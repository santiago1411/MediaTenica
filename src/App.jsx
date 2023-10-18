import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Cursos from './paginas/Cursos';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import HomeL from './paginas/homeL';
import Perfil from "./paginas/perfil";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/cursos' element={<Cursos/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/registro' element={<Registro/>}/>
        <Route exact path='/HomeL' element={<HomeL/>}/>
        <Route exact path='/perfil' element={<Perfil/>}/>
        
        
      </Routes>
    </Router>
  )
}

export default App;