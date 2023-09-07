import './style.css'
import { Link } from 'react-router-dom';

function CadastroForm() {
    return(
        <div className='container-cadastro'>
            <div className='form-cadastro'>
                <div className='container-form-cadastro'>
                    <div className='cadastro-title'>
                        <h1>Bem vindo(a), a AC Pets Helper!</h1>
                        <p>Faça seu cadastro para acessar tudo</p>
                    </div>
                    <div className='cadastro-form'>
                        <form action="" method="post">
                            <p className='input-label-cadastro'>DIGITE SEU NOME</p>
                            <input name="name" type="text" />
                            <br/><br/>
                            <p className='input-label-cadastro'>DIGITE SEU EMAIL</p>
                            <input name="email" type="text" />
                            <br/><br/>
                            <p className='input-label-cadastro'>DIGITE SEU TELEFONE</p>
                            <input name="telefone" type="text" />
                            <br/><br/>
                            <p className='input-label-cadastro'>DIGITE SEU CEP</p>
                            <input name="cep" type="text" />
                            <br/><br/>
                            <p className='input-label-cadastro'>CRIE SUA SENHA</p>
                            <input name="senha" type="password" />
                            <button className="botao-cadastro">Enviar</button>
                            <p className='register-p'>Já tem uma conta? <Link to="/login">Entre</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CadastroForm