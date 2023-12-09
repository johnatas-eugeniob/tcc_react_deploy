import './style.css';
import { useState } from 'react';
import { useUser } from '../Context';

export default function ModalUpdatePubli({ postId }) {
  const { nome, imagem } = useUser();

  const [newCaption, setNewCaption] = useState('');
  const [newImage, setNewImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Adicione estas linhas para obter o user_id e tableName
  const userId = JSON.parse(localStorage.getItem('token')).id;
  const tableName = 'posts'; // ou obtenha dinamicamente dependendo da sua lógica

  const handleNewCaptionChange = (event) => {
    setNewCaption(event.target.value);
  };

  const handleNewImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setNewImage(selectedImage);

    const imageURL = URL.createObjectURL(selectedImage);
    setImagePreview(imageURL);
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('caption', newCaption);
    formData.append('image', newImage);
    formData.append('user_id', userId);
    formData.append('post_id', postId);
    formData.append('table_name', tableName);

    fetch('http://localhost/logica-tcc/update_post.php', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          //setModalOpen(false);
        } else {
          // Lógica para erro, se necessário
        }
      })
      .catch(error => {
        console.error('Erro ao enviar a publicação:', error);
        window.location.href = '/meus-posts';
      });
  };

  return (
    <form onSubmit={handleUpdate}>
      <div className="conteudo-tudo-publi-update">
        <div className="conteudo-titulo-publi-update">
          <h2>Editar Publicação</h2>
        </div>
        <hr />
        <div className="conteudo-nome-publi">
          <img src={imagem} alt="Foto de perfil" />
          <b>
            <p>{nome}</p>
          </b>
        </div>
        <div className="text-desc">
          <textarea
            name="descricao"
            id="descricao"
            cols="10"
            rows="80"
            placeholder="O que está acontecendo?.."
            value={newCaption}
            onChange={handleNewCaptionChange}
          ></textarea>
        </div>
        <div className="upload-desc-update">
          <label htmlFor='upload-img-update'>Foto &#187;</label>
          <input
            id="upload-img-update"
            type="file"
            accept="image/*"
            onChange={handleNewImageChange}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview da imagem"
              style={{
                maxWidth: '200px',
                maxHeight: '150px',
                marginTop: '10px',
                border: '1px solid #000',
                objectFit: 'cover',
              }}
            />
          )}
        </div>
        <button type='submit' className='btn-submit-update'>
          Atualizar
        </button>
      </div>
    </form>
  );
}
