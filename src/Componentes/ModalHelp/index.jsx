import { useEffect, useState } from 'react';
import './style.css';

export default function ModalHelp({ postId }) {
  const [postInfo, setPostInfo] = useState(null);

  useEffect(() => {
    // Fazer a solicitação para a API que lê os campos específicos com base no post_id
    if (postId) {
      fetch(`http://localhost/logica-tcc/user_info_post.php?post_id=${postId}`)
        .then(response => response.json())
        .then(data => {
          // Atualizar o estado com os dados obtidos
          setPostInfo(data);
        })
        .catch(error => console.error('Erro ao recuperar informações do post:', error));
    }
  }, [postId]);

  return (
    <div className="conteudo-tudo-help">
      <div className="conteudo-titulo-help">
        <h2>Informações para Contato</h2>
      </div>
      <hr />
      <div className="conteudo-nome-help">
        {/**Foto do usuario */}
        <img src={postInfo?.imagem} alt="Foto de perfil" />
        <b>
          {/**Nome do Usuario */}
          <p>{postInfo?.nome}</p>
        </b>
      </div>
      {/* Legenda do Post */}
      <div className="text-desc-help">
        <p className='desc'><b>Cidade:</b> {postInfo?.cidade}</p>
        <p className='desc'><b>Bairro:</b> {postInfo?.bairro}</p>
        <p className='desc'><b>Telefone de contato:</b> {postInfo?.telefone}</p>
      </div>
    </div>
  );
}
