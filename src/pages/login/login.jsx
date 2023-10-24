import HeaderLogin from "../../Componentes/HeaderLogin"
import MenuOculto from "../../Componentes/MenuOculto";
import LoginForm from "../../Componentes/LoginForm";
//import styled from 'styled-components';

function Login() {
    return(
        <>
            <MenuOculto />
            <HeaderLogin />
            <LoginForm />
        </>
    )
}
export default Login