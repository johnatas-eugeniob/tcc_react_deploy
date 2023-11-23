import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Desaparecidos from '../pages/Desaparecidos/Desaparecidos';
import StAjuda from '../pages/StAjuda/StAjuda';
import Publi from '../pages/Publi/Publi';
import Login from '../pages/login/login';
import Cadastro from '../pages/Cadastro/Cadastro';
import Dashboard from '../pages/Dashboard/Dash';

// Import Swiper components
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      console.log("Situação:", isLoggedIn)
    }
  }, []);

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/desaparecidos" element={isLoggedIn ? <Desaparecidos /> : <Navigate to="/login" replace />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />} />
        <Route path="/stajuda" element={isLoggedIn ? <StAjuda /> : <Navigate to="/login" replace />} />
        <Route path="/publi" element={isLoggedIn ? <Publi /> : <Navigate to="/login" replace />} />
      </Routes>

      </BrowserRouter>
    </>
  );
}

// Export handleLogout function
register();

export default AppRoutes;

