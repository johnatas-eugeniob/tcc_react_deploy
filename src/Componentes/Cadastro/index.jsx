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
                    <form action="" method="post" className='cadastro-form-input'>
                        <div className='dados'>
                            <p className='input-label-cadastro'>DIGITE SEU NOME COMPLETO</p>
                            <input name="name" type="text" />
                            <br/><br/>
                            <p className='input-label-cadastro'>DIGITE SEU EMAIL</p>
                            <input name="email" type="text" />
                            <br/><br/>
                            <p className='input-label-cadastro'>CRIE UMA SENHA</p>
                            <input name="senha" type="password" />
                            <br/><br/>
                            <p className='input-label-cadastro'>CONFIRME SUA SENHA</p>
                            <input name="senha" type="password" />
                            <br/><br/>
                        </div>
                        <div className='endereco'>
                            <p className='input-label-cadastro'>DIGITE SEU CEP</p>
                            <input name="cep" type="text" />
                            <br/><br/>
                            <p className='input-label-cadastro'>RUA</p>
                            <input name="rua" type="text" />
                            <br/><br/>
                            <p className='input-label-cadastro'>BAIRRO</p>
                            <input name="rua" type="text" />
                            <br/><br/>
                            <p className='input-label-cadastro'>COMPLEMENTO (Opicional)</p>
                            <input name="rua" type="text" />
                            <br/><br/>
                        </div>
                    </form>
                    <div className='buttons'>
                        <div className='bt-enviar'>
                            <button className="botao-cadastro">Enviar</button>
                        </div>    
                        <div className='bt-juri'>
                            <p className='register-p'>Já tem uma conta? <Link to="/login">Entre</Link></p>
                            <p className='register-p'>É uma Ong ou Instituição? <Link to="/login">Acesse</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CadastroForm