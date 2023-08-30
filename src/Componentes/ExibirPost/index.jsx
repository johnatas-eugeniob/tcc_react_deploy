import './style.css'
import perfilImg from '../../img/doguinho.png'
import testeImg from '../../img/teste.png'
import { PiHandGrabbingDuotone } from 'react-icons/pi'
import { GiPawHeart } from 'react-icons/gi'

function ExibirPost() {
    return(
        <div className="conteudoDesaparecidos">
            <div className="janelaPerfilDescricao">
                <div className="janelaPerfil">
                    <div className="imgPerfil">
                        <img src={perfilImg} alt="Foto de Usuario" />
                    </div>
                    <div className="descPost">
                        <p><b>Nal do Canal</b></p>
                        <p>Agora mesmo</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet. Et natus necessitatibus aut eligendi eveniet
                At laborum enim quo obcaecati amet eos nihil consectetur At sint earum.</p>
            </div>
            <div className="hrDescricaoImagem">
                <hr/>
            </div>
            <img src={testeImg} width="100%" height="75%" alt=""/>
            <div className="hrImagemCurtidas">
                <hr/>
            </div>
            <div className="curtidas">
                <div id="curtir" className="imagemCurtida"><PiHandGrabbingDuotone className='iconeCurtida'/> Força</div>
                <div id="ajudar" className="imagemCurtida"><GiPawHeart className='iconeCurtida'/> Ajudar</div>
            </div>
        </div>
    )
}
export default ExibirPost