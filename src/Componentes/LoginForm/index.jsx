import './style.css'
import { useState } from 'react';
import { AlertSuccess, AlertDanger, AlertWaring } from './styles';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: '',
      senha: ''
    });
  
    const [status, setStatus] = useState({
      type: '',
      mensagem: ''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await fetch("http://localhost/logica-tcc/validar.php", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
    
        if (response.ok) {
          const data = await response.json();
          if (data.erro === "true") {
            setStatus({ type: 'erro', mensagem: data.mensagem });
          } else if (data.erro === "aviso") {
            setStatus({ type: 'aviso', mensagem: data.mensagem });
          } else {
            // Armazene o token no localStorage após o login bem-sucedido
            localStorage.setItem('token', data.token);
            console.log(data.token);
            navigate('/desaparecidos');
            setStatus({ type: 'success', mensagem: data.mensagem });
          }
        } else {
          const data = await response.json();
          setStatus({ type: 'erro', mensagem: data.mensagem });
        }
      } catch (error) {
        setStatus({ type: 'erro', mensagem: 'Ocorreu um erro ao enviar os dados.' });
      }
    };
  return(
      <div className='container-form-login'>
          <div className='form-login'>
              <div className='container-form'>
                  <div className='login-title'>
                      <h1>Bem vindo(a), a AC Pets Helper!</h1>
                      <p>Faça o login ou o cadastro para acessar tudo</p>
                  </div>
                  {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
                  {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}
                  {status.type === 'aviso' ? 
                  <AlertWaring>
                    {status.mensagem} 
                    <a href="https://mailtrap.io/inboxes/2435763/messages" target="_blank" rel="noopener noreferrer">
                      Ir para o email
                    </a>
                  </AlertWaring> 
                  : ""}
                  <div className='login-form'>
                      <form onSubmit={handleSubmit} method="post">
                          <p className='input-label'>DIGITE SEU EMAIL</p>
                          <input 
                              type="email"
                              name="email"
                              placeholder="Seu Email"
                              value={formData.email}
                              onChange={handleInputChange} 
                          />
                          <br/><br/><br/>

                          <p className='input-label'>DIGITE SUA SENHA</p>
                          <input 
                              type="password"
                              name="senha"
                              placeholder="Sua Senha"
                              value={formData.senha}
                              onChange={handleInputChange} 
                          />

                          <Link to="">Esqueceu sua senha?</Link><br />
                          <button className="botao-login" type="submit">Enviar</button>
                          <p className='register-p'>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    )
}
