import './style.css'
import { BsInstagram } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'
import logo from '../../img/logo.svg'

function Rodape(){
    return(
        <div id="rodape">
                <div className='make-dev'><b>Make for Jhon Dev</b></div>
            <div className='container-tudo'> 
                <div className='container-menu'>
                    <img src={logo} alt="logotipo do site" width="120px" height="120px" /> <h2>Arcanine Pets Helper</h2>
                </div>
                <div className='container-rodapeMenu'>
                    <div className="rodapeMenu">
                        <h3>Menu</h3>
                        <a href="#inicio">Inicio</a><br />
                        <a href="#Sobre">Sobre nós</a><br />
                        <a href="#comoFunciona">Como Funciona</a><br />
                        <a href="#Parceiros">Parceiros</a><br />
                    </div>
                </div>
            </div>
        <div className="rodapeContato">
            <a href="#" target="_blank" rel="noopener noreferrer"><BsInstagram className='icone-footer'/></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><BiLogoGmail className='icone-footer'/></a>
        </div>
    </div>
    )
}
export default Rodape