import './App.css'
import { register } from 'swiper/element/bundle'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Desaparecidos from './pages/Desaparecidos/Desaparecidos'
import Donate from "./pages/Donate/Donate"
import StAjuda from "./pages/StAjuda/StAjuda"
import Publi from "./pages/Publi/Publi"
import Login from "./pages/login/login"
import Cadastro from './pages/Cadastro/Cadastro'
import Dashboard from './pages/Dashboard/Dash'

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/desaparecidos' element={<Desaparecidos />} />
          <Route path='/donate' element={<Donate />} />
          <Route path="/stajuda" element={<StAjuda />} />
          <Route path="/publi" element={<Publi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default AppRoutes

/*            <Route path="/editar/:id" element={<Editar />} />
          <Route path="/visualizar/:id" element={<Visualizar />} />*/