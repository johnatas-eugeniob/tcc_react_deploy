import './style.css'
import userImg from '../../img/doguinho.png'

export default function ModalPubli(  ){
    return(
        <div className="conteudo-tudo-publi">
            <div className="conteudo-titulo-publi">
                <h2>Criar Publicação</h2>
            </div>
            <hr/>
            <div className="conteudo-nome-publi">
                <img src={userImg} alt="Foto de perfil" />
                <b>
                    <p>Luan sem carteirinha</p>
                </b>
            </div>
            <div className="text-desc">
                <textarea name="descricao" id="descricao" cols="10" rows="80"
                    placeholder="O que está acontecendo?.."></textarea>
            </div>
            <div className="upload-desc">
                <label htmlFor='upload-img'>Selecione uma Imagem &#187;</label>
                <input id="upload-img" type="file"/>
            </div>
        </div>
    );    
}