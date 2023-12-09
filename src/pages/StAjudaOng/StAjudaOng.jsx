import HeaderSemLinkOng from '../../ExclusivosOng/HeaderSemLinkOng'
import MenuOcultoLogado from '../../Componentes/MenuOcultoLogado'
import NavVerticalStOng from '../../ExclusivosOng/NavVerticalSt'
import { useEffect, useState } from 'react'
import { PiHandGrabbingDuotone } from 'react-icons/pi';
import { GiPawHeart } from 'react-icons/gi';
import ModalForHelp from '../../Componentes/ModalForHelp';
import ModalHelp from '../../Componentes/ModalHelp';
import '../StAjuda/style.css'
           
function StAjuda() {
  const [openModalHelp, setOpenModalHelp] = useState(null);
    const [posts, setPosts] = useState([]);

    const handleToggleLike = (postId) => {
        // Verificar se o usuário já curtiu o post
        const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
      
        if (likedPosts.includes(postId)) {
          // O usuário já curtiu o post, então remova a curtida
          // Fazer a solicitação para a API para remover a curtida
          fetch(`http://localhost/logica-tcc/unlike_post.php?post_id=${postId}`)
            .then(response => response.json())
            .then(data => {
              if (data.success) {
                // Atualizar o estado local para refletir a remoção da curtida
                setPosts(prevPosts =>
                  prevPosts.map(post =>
                    post.post_id === postId ? { ...post, likes: post.likes - 1 } : post
                  )
                );
                // Remover o postId da lista de posts curtidos
                localStorage.setItem(
                  'likedPosts',
                  JSON.stringify(likedPosts.filter(id => id !== postId))
                );
              } else {
                console.error('Erro ao remover curtida do post:', data.error);
              }
            })
            .catch(error => {
              console.error('Erro ao remover curtida do post:', error);
            });
        } else {
          // O usuário ainda não curtiu o post, então adicione a curtida
          // Fazer a solicitação para a API para adicionar a curtida
          fetch(`http://localhost/logica-tcc/like_post.php?post_id=${postId}`)
            .then(response => response.json())
            .then(data => {
              if (data.success) {
                // Atualizar o estado local para refletir a adição da curtida
                setPosts(prevPosts =>
                  prevPosts.map(post =>
                    post.post_id === postId ? { ...post, likes: post.likes + 1 } : post
                  )
                );
                // Adicionar o postId à lista de posts curtidos
                localStorage.setItem(
                  'likedPosts',
                  JSON.stringify([...likedPosts, postId])
                );
              } else {
                console.error('Erro ao curtir post:', data.error);
              }
            })
            .catch(error => {
              console.error('Erro ao curtir post:', error);
            });
        }
      };

    useEffect(() => {
        // Fazer a solicitação para o script PHP
        fetch('http://localhost/logica-tcc/visualizar_post_st.php')
            .then(response => response.json())
            .then(data => setPosts(data))  // Atualiza o estado com os dados obtidos
            .catch(error => console.error('Erro ao recuperar dados:', error));
    }, []);
    return(
        <>
            <MenuOcultoLogado />
            <HeaderSemLinkOng />
            <div className='tudo'>
                <NavVerticalStOng />
                <div className='container-conteudoTudo-st'>
                    {posts.map(postSt=> (
                        <div key={postSt.post_id_st} className='conteudoTudo-st'>
                            <div className="conteudoDesaparecidos-st">
                                <div className="janelaPerfilDescricao-st">
                                    <div className="janelaPerfil-st">
                                        <div className="imgPerfil-st">
                                            <img src={postSt.imagem} alt="Foto de Usuario" />
                                        </div>
                                        <div className="descPost-st">
                                            <p><b>{postSt.nome}</b></p>
                                            <p><b>Data e hora do post:</b> {postSt.creation_date}</p>
                                        </div>
                                    </div>
                                    <p>{postSt.caption}</p>
                                </div>
                                <div className="hrDescricaoImagem-st">
                                    <hr />
                                </div>
                                <img src={postSt.image_path} width="100%" height="75%" alt="" />
                                <div className="hrImagemCurtidas-st">
                                    <hr />
                                </div>
                                <div className="curtidas-st">
                                <button onClick={() => handleToggleLike(postSt.post_id)} 
                                            id="curtir"
                                            className={`imagemCurtida`}
                                            >
                                                <PiHandGrabbingDuotone className='iconeCurtida' /> Força {postSt.likes}
                                    </button>
                                    <button onClick={() => setOpenModalHelp(postSt.post_id)} id="ajudar" className="imagemCurtida"><GiPawHeart className='iconeCurtida' /> Ajudar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {openModalHelp && (
                  <ModalForHelp
                    isOpen={openModalHelp !== null}
                    setModalOpenHelp={() => setOpenModalHelp(null)}
                  >
                  <ModalHelp postId={openModalHelp} />
                </ModalForHelp>
            )}
            </div>
        </>
    )
}
export default StAjuda