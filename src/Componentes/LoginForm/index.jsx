import './style.css'
import { Link } from 'react-router-dom';
import logo from "../../img/logo.svg"

function LoginForm() {
    return(
        <div className='container-form-login'>
            <div className='form-login'>
                <div className='container-form'>
                    <div className='login-title'>
                        <h1>Bem vindo(a), a AC Pets Helper!</h1>
                        <p>Faça o login ou o cadastro para acessar tudo</p>
                    </div>
                    <div className='login-form'>
                        <form action="" method="post">
                            <p className='input-label'>DIGITE SEU EMAIL OU NUMERO DE TELEFONE</p>
                            <input name="email" type="text" />
                            <br/><br/><br/>
                            <p className='input-label'>DIGITE SUA SENHA</p>
                            <input name="senha" type="password" />
                            <Link to="">Esqueceu a senha?</Link>
                            <input type="submit" value="Entre" className="login-form-botao" />
                            <input type="button" value="Cadastre-se" className="login-form-botao" />
                        </form>
                    </div>
                </div>
                <div className="container-form-logo">
                <img src={logo} alt="" width="100%" height="50%" />
                </div>
            </div>
        </div>
    )
}
export default LoginForm