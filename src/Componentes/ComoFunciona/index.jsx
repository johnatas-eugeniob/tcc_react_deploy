import './style.css'
import { FcOldTimeCamera, FcSearch } from 'react-icons/fc'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaRegPaperPlane, FaHandsHelping } from 'react-icons/fa'

function ComoFunciona(){
    return(
        <div className="comoFunciona">
            <div className="conteudoComoFunciona">
                <h1>Como Funciona</h1>
                <p>Nos casos de ajuda é importante sabermos com quem podemos contar.
                    A Arcanine Pets Helper, é a empresa certa para isso! Seus pedidos são enviados rapidamente
                    para clinicas, instituições e ONGs voltadas para o meio animal
                    para o quanto antes a causa do animal possa ser atendida.</p>
                <div className="iconesComoFunciona">
                    <div className="primeiraEtapa">
                        <center>
                            <h3>1 - Foto</h3>
                            <FcOldTimeCamera className='icone'/>
                            <p>Você envia uma <br/> foto do ocorrido</p>
                        </center>
                    </div>

                    <AiOutlineArrowRight className='seta'/>

                    <div className="segundaEtapa">
                        <center>
                            <h3>2 - Postagem</h3>
                            <FaRegPaperPlane className='icone'/>
                            <p>A foto é postada <br/> no site</p>
                        </center>
                    </div>

                    <AiOutlineArrowRight className='seta'/>

                    <div className="terceiraEtapa">
                        <center>
                            <h3>3 - Análise</h3>
                            <FcSearch className='icone'/>
                            <p>A foto passa por uma <br/> análise para checar <br/> a veracidade </p>
                        </center>
                    </div>

                    <AiOutlineArrowRight className='seta'/>

                    <div className="quartaEtapa">
                        <center>
                            <h3>4 - Solicitação de Atendimento</h3>
                            <FaHandsHelping className='icone'/>
                            <p>Nesta etapa a postagem <br/> já foi verificada e uma mensagem <br/>
                                de ajuda foi enviada as clinicas, empresas <br/>
                                e instituições cadastradas perto da sua região</p>
                        </center>
                    </div>
                </div><a name="Parceiros"></a>
            </div>
        </div>
    )
}
export default ComoFunciona
