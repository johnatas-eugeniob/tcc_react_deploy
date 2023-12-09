import './style.css'
import { useNavigate } from 'react-router-dom';

export default function SeletorEntrada() {
    const navigate = useNavigate();
    
  return(
      <div className='container-form-login'>
          <div className='form-login'>
              <div className='container-form'>
                  <div className='login-title'>
                      <h1>Bem vindo(a), a AC Pets Helper!</h1>
                      <h2>Selecione uma forma de Entrada:</h2>
                  </div>
                  <div className='selecionar-login'>
                    <button onClick={navigate.bind(this, '/login')}>Usuario</button>
                    <button onClick={navigate.bind(this, '/login-ong')}>ONG/Instituição</button>
                  </div>
              </div>
          </div>
      </div>
    )
}

