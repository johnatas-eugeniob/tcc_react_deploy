import './style.css'
import { BsInstagram } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'

function Rodape(){
    return(
        <div id="rodape">
        <div className="rodapeMenu">
            <a href="#inicio">Inicio</a><br />
            <a href="#Sobre">Sobre nós</a><br />
            <a href="#comoFunciona">Como Funciona</a><br />
            <a href="#Parceiros">Parceiros</a><br />
        </div>
        <div className="rodapeContato">
            <a href="#" target="_blank" rel="noopener noreferrer"><BsInstagram className='icone-footer'/></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><BiLogoGmail className='icone-footer'/></a>
        </div>
        <div>

        </div>
    </div>
    )
}
export default Rodape