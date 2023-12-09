//import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Desaparecidos from '../pages/Desaparecidos/Desaparecidos';
import StAjuda from '../pages/StAjuda/StAjuda';
import Login from '../pages/login/login';
import LoginOng from '../pages/LoginOng/LoginOng'
import Cadastro from '../pages/Cadastro/Cadastro';
import CadastroOng from '../pages/CadastroOng/CadastroOng'
import Dashboard from '../pages/Dashboard/Dash';
import SeletorLogin from '../pages/SeletorEntrada/SeletorEntrada';
import MeusPosts from '../pages/MeusPosts/MeusPosts';
import EsqueceuSenha from '../pages/esqueceuSenha/EsqueceuSenha';
import TrocarSenha from '../pages/TrocarSenha/TrocarSenha';
//import MeusPostsSt from '../pages/MeusPostsSt/MeusPostsSt';
import { PrivateRoute } from './PrivateRoute';
// Import Swiper components
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//Exclusivo para Ongs
import StAjudaOng from '../pages/StAjudaOng/StAjudaOng'
import DesaparecidosOng from '../pages/DesaparecidosOng/DesaparecidosOng'
import DashboardOng from '../pages/DashOng/DashOng'
function AppRoutes() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seletor-login" element={<SeletorLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-ong" element={<LoginOng />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro-ong" element={<CadastroOng />} />
        <Route path="/desaparecidos" element={<PrivateRoute><Desaparecidos /></PrivateRoute>} />
        <Route path="/desaparecidos-ong" element={<PrivateRoute><DesaparecidosOng /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/dashboard-ong" element={<PrivateRoute><DashboardOng /></PrivateRoute>} />
        <Route path="/stajuda" element={<PrivateRoute><StAjuda /></PrivateRoute>} />
        <Route path="/stajuda-ong" element={<PrivateRoute><StAjudaOng /></PrivateRoute>} />
        <Route path="/meus-posts" element={<PrivateRoute><MeusPosts /></PrivateRoute>} />
        <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
        <Route path="/trocar-senha" element={<TrocarSenha />} />
      </Routes>

      </BrowserRouter>
    </>
  );
}

register();

export default AppRoutes;

