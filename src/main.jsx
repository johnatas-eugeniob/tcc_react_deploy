import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/routes'
import './App.css'
import { UserProvider } from './Componentes/Context';


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <AppRoutes />
  </UserProvider>
)
