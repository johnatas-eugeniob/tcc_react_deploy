import { useEffect, useState } from 'react';
import './style.css';
import HeaderSemLink from '../../Componentes/HeaderSemLink';
import MenuOcultoLogado from '../../Componentes/MenuOcultoLogado';
import NavVerticalPb from '../../Componentes/NavVerticalPb';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import ModalForPubli from '../../Componentes/ModalForPubli';
import ModalUpdatePubli from '../../Componentes/ModalUpdatePubli';
import ModalDeletePubli from '../../Componentes/ModalDelete';
import ModalForDelete from '../../Componentes/ModalForDelete';
import { PiHandGrabbingDuotone } from 'react-icons/pi';

export default function MeusPosts() {
  const [openModalPost, setOpenModalPost] = useState(null);
  const [openModalDelete, setOpenModalDelete] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Obter o token do localStorage
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      // Parse do token
      const tokenObj = JSON.parse(storedToken);

      // Configurar o cabeçalho da requisição
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenObj.token}`
      });

      // Configurar o corpo da requisição (se necessário)
      const body = JSON.stringify({
        id: tokenObj.id // Supondo que você precise enviar o ID do usuário
      });

      // Fazer a solicitação para o script PHP
      fetch('http://localhost/logica-tcc/visualizar_post_user.php', {
        method: 'POST', // ou 'GET', dependendo da sua API
        headers: headers,
        body: body // O corpo é opcional e depende da sua API
      })
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Erro ao recuperar dados:', error));
    }
  }, []);

  return (
    <>
      <MenuOcultoLogado />
      <HeaderSemLink />
      <div className='tudo'>
        <NavVerticalPb />
        <div className='container-conteudoTudo-meu-post'>
        {posts.map(post => (
          <div key={post.post_id} className='conteudoTudo-meu-post'>
              <div  className="conteudoDesaparecidos-meu-post">
                <div className="janelaPerfilDescricao-meu-post">
                  <div className="janelaPerfil-meu-post">
                    <div className="imgPerfil-meu-post">
                      <img src={post.imagem} alt="Foto de Usuario" />
                    </div>
                    <div className="descPost-meu-post">
                      <p><b>{post.nome}</b></p>
                      <p><b>Data e hora do post:</b> {post.creation_date}</p>
                    </div>
                  </div>
                  <p>{post.caption}</p>
                </div>
                <div className="hrDescricaoImagem-meu-post">
                  <hr />
                </div>
                <img src={post.image_path} width="100%" height="75%" alt="" />
                <div className="hrImagemCurtidas-meu-post">
                  <hr />
                </div>
                <div className="curtidas-st">
                  <button id="curtir"
                          className={`imagemCurtida`}
                  >
                          <PiHandGrabbingDuotone className='iconeCurtida' /> Força {post.likes}
                  </button>
                </div>
                <div className='button-update'>
                  <button onClick={() => setOpenModalPost(post.post_id)} className='button-content'><FaRegEdit /> Editar</button>
                  <button onClick={() => setOpenModalDelete(post.post_id)} className='button-content'><FaTrashAlt /> Apagar</button>
                </div>
              </div>
          </div>
          ))}
        </div>
      </div>
      {openModalPost && (
        <ModalForPubli
          isOpen={openModalPost !== null}
          setModalOpen={() => setOpenModalPost(null)}
        >
          <ModalUpdatePubli postId={openModalPost} />
        </ModalForPubli>
      )}
      {openModalDelete && (
        <ModalForDelete
          isOpen={openModalDelete !== null}
          setModalOpenDelete={() => setOpenModalDelete(null)}
        >
          <ModalDeletePubli postId={openModalDelete} />
        </ModalForDelete>
      )}
    </>
  );
}
