import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {register} from 'swiper/element/bundle'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./Paginas/Home/Home"
import Desaparecidos from './Paginas/Desaparecidos/Desaparecidos'
import Donate from "./Paginas/Donate/Donate"
import StAjuda from "./Paginas/StAjuda/StAjuda"
import Publi from "./Paginas/Publi/Publi"
import Login from "./Paginas/login/login"

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'donate',
    element: <Donate />,
  },
  {
    path: 'desaparecidos',
    element: <Desaparecidos />,
  },
  {
    path: 'stajuda',
    element: <StAjuda />,
  },
  {
    path: 'publi',
    element: <Publi />,
  },
  {
    path: 'login',
    element: <Login />,
  }
])

register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
