import { Routes, Route, Link } from 'react-router-dom'
import {Home} from './pages/Home'
import {Sobre} from './pages/Sobre'
import {Contato} from './pages/Contato'
import './App.css'


function App() {
  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </>
  );
}

export default App