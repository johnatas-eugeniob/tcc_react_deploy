import { useEffect, useState } from 'react';
import HeaderSemLinkOng from '../../ExclusivosOng/HeaderSemLinkOng';
import MenuOcultoLogadoOng from '../../ExclusivosOng/MenuOcultoOng';
import NavVerticalOngD from '../../ExclusivosOng/NavVerticalD'
import { PiHandGrabbingDuotone } from 'react-icons/pi';
import { GiPawHeart } from 'react-icons/gi';
import ModalForHelp from '../../Componentes/ModalForHelp';
import ModalHelp from '../../Componentes/ModalHelp';
           
function DesaparecidosOng() {
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
        fetch('http://localhost/logica-tcc/visualizar_post.php')
            .then(response => response.json())
            .then(data => setPosts(data))  // Atualiza o estado com os dados obtidos
            .catch(error => console.error('Erro ao recuperar dados:', error));
    }, []);

    return(
        <>
            <MenuOcultoLogadoOng />
            <HeaderSemLinkOng />
            <div className='tudo'>
                <NavVerticalOngD />
                <div className='container-conteudoTudo'>
                    {posts.map(post => (
                        <div key={post.post_id} className='conteudoTudo'>
                            <div className="conteudoDesaparecidos">
                                <div className="janelaPerfilDescricao">
                                    <div className="janelaPerfil">
                                        <div className="imgPerfil">
                                            <img src={post.imagem} alt="Foto de Usuario" />
                                        </div>
                                        <div className="descPost">
                                            <p><b>{post.nome}</b></p>
                                            <p><b>Data e hora do post:</b> {post.creation_date}</p>
                                        </div>
                                    </div>
                                    <p>{post.caption}</p>
                                </div>
                                <div className="hrDescricaoImagem">
                                    <hr />
                                </div>
                                <img src={post.image_path} width="100%" height="75%" alt="" />
                                <div className="hrImagemCurtidas">
                                    <hr />
                                </div>
                                <div className="curtidas">
                                <button onClick={() => handleToggleLike(post.post_id)} 
                                            id="curtir"
                                            className={`imagemCurtida`}
                                            >
                                                <PiHandGrabbingDuotone className='iconeCurtida' /> Força {post.likes}
                                    </button>
                                    <button onClick={() => setOpenModalHelp(post.post_id)} id="ajudar" className="imagemCurtida"><GiPawHeart className='iconeCurtida' /> Ajudar</button>
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
export default DesaparecidosOng