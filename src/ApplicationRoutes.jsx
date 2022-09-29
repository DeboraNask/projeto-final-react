import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Cardapio from './pages/Cardapio/Cardapio'
import Contato from './pages/Contato/Contato'
import Comentarios from './pages/Comentarios/Comentarios'


function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/comentarios" element={<Comentarios />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default ApplicationRoutes