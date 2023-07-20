import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import Empresa from './pages/Empresa.js'
import Contato from './pages/Contato.js'
import NavBar from './components/layout/NavBar.js'
import Footer from './components/layout/Footer.js'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/empresa" element={<Empresa />}>
        </Route>
        <Route path="/contato" element={<Contato />}>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
