import './style.css'
import { useState } from 'react';
import { AlertSuccess, AlertDanger} from './styles';
import { Link } from 'react-router-dom';

export default function Cadastrar() {
    const [user, setUser] = useState({
      nome: '',
      email: '',
      senha: '',
      telefone: '',
      cep: '',
      rua: '',
      bairro: '',
      cidade: ''
    });
  
    const [status, setStatus] = useState({
      type: '',
      mensagem: ''
    });
  
    const valorInput = e => setUser({ ...user, [e.target.name]: e.target.value });
  
    const [cepFormatado, setCepFormatado] = useState(''); //referente a formatação do autocomplete de cep
  
    const handleCepChange = async (e) => {
      const cep = e.target.value.replace(/\D/g, ''); //referente ao autocomplete de cep
  
      if (cep.length === 8) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
          const data = await response.json();
  
          if (!data.erro) {
            setUser({
              ...user,
              cep: cep,
              rua: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
            });
            setCepFormatado(`${cep.substr(0, 5)}-${cep.substr(5)}`);
          } else {
            setUser({
              ...user,
              cep: '',
              rua: '',
              bairro: '',
              cidade: '',
            });
            setCepFormatado('');
          }
        } catch (error) {
          console.error('Erro ao buscar CEP', error);
          setStatus({ type: 'erro', mensagem: 'Não foi possivel buscar o CEP, erro na API' });
        }
      } else {
        setUser({
          ...user,
          cep: cep,
        });
        setCepFormatado(cep);
      }
    };
    const cadUser = async e => {
      e.preventDefault();
  
      // Verifica se os campos obrigatórios estão preenchidos
      if (!user.nome || !user.email || !user.senha) {
        setStatus({ type: 'erro', mensagem: 'Preencha todos os campos obrigatórios (nome, email, senha).' });
        return;
      }
  
      // Verifica se a cidade é igual a Santana de Parnaíba ou Cajamar
      if (user.cidade !== "Santana de Parnaíba" && user.cidade !== "Cajamar") {
        setStatus({ type: 'erro', mensagem: 'Por enquanto cobrimos somente "Santana de Parnaíba" e "Cajamar"' });
        return;
      }
  
      // Inclua o valor do CEP no objeto user
      const userWithCep = { ...user, cep: user.cep };
      await fetch("http://localhost/logica-tcc/cadastrar.php", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: userWithCep })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.erro) {
            setStatus({ type: 'erro', mensagem: responseJson.mensagem });
          } else {
            setStatus({ type: 'success', mensagem: responseJson.mensagem });
          }
        })      
        .catch(() => {
          setStatus({ type: 'erro', mensagem: 'Usuário não cadastrado com sucesso, tente mais tarde!' });
        });
    };
    return (
        <div className='container-cadastro'>
            <div className='form-cadastro'>
                <div className='container-form-cadastro'>
                    <div className='cadastro-title'>
                        <h1>Bem vindo(a), a AC Pets Helper!</h1>
                        <p>Faça seu cadastro para acessar tudo</p>
                    </div>
                    {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
                    {status.type === 'success' ? 
                    <AlertSuccess>
                      {status.mensagem} 
                      <a href="https://mailtrap.io/inboxes/2435763/messages" target="_blank" rel="noopener noreferrer">
                        Ir para o email
                      </a>
                      </AlertSuccess> 
                    : ""}
        
                    <form onSubmit={cadUser} method="post" className='cadastro-form-input'>
                      <div className='cadastro-form-input-div'>
                          <div className='dados'>
                              <p className='input-label-cadastro'>DIGITE SEU NOME COMPLETO</p>
                              <input type="text" name="nome" placeholder="Nome" onChange={valorInput} />
                              <br /><br />
                              <p className='input-label-cadastro'>DIGITE SEU EMAIL</p>
                              <input type="email" name="email" placeholder="Email" onChange={valorInput} />
                              <br /><br />
                              <p className='input-label-cadastro'>CRIE UMA SENHA</p>
                              <input type="password" name="senha" placeholder="Senha" onChange={valorInput} />
                              <br /><br />
                              <p className='input-label-cadastro'>TELEFONE</p>
                              <input type="text" name="telefone" placeholder="Tel" onChange={valorInput} />
                              <br /><br />
                          </div>
                          <div className='endereco'>
                              <p className='input-label-cadastro'>DIGITE SEU CEP</p>
                              <input 
                                  type="text"
                                  name="cep"
                                  placeholder="CEP"
                                  value={cepFormatado}
                                  onChange={handleCepChange} 
                              />
                              <br /><br />

                              <p className='input-label-cadastro'>RUA</p>
                              <input 
                                  type="text"
                                  name="rua"
                                  placeholder="Rua"
                                  value={user.rua}
                                  onChange={valorInput} 
                              />
                              <br /><br />

                              <p className='input-label-cadastro'>BAIRRO</p>
                              <input 
                                  type="text"
                                  name="bairro"
                                  placeholder="Bairro"
                                  value={user.bairro}
                                  onChange={valorInput} 
                              />
                              <br /><br />

                              <p className='input-label-cadastro'>CIDADE</p>
                              <input 
                                  type="text"
                                  name="cidade"
                                  placeholder="Cidade"
                                  value={user.cidade}
                                  onChange={valorInput} 
                              />
                              <br /><br />
                              
                          </div>
                        </div>
                        <div className='buttons'>
                            <div className='bt-juri'>
                                <p className='register-p'>Já tem uma conta? <Link to="/login">Entre</Link></p>
                                <p className='register-p'>É uma Ong ou Instituição? <Link to="/login">Acesse</Link></p>
                            </div>
                            <button className="botao-cadastro" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
