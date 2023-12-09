import './style.css'
import { useState } from 'react';
//import { userImg } from 'react';
import { useUser } from '../Context'

export default function ModalPubli() {
    const { nome, imagem } = useUser();

    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('desaparecidos'); // Valor padrão

    const handleCaptionChange = (event) => {
        setCaption(event.target.value);
    };

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);

        // Cria uma URL temporária para a imagem carregada
        const imageURL = URL.createObjectURL(selectedImage);
        setImagePreview(imageURL);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append('caption', caption);
        formData.append('image', image);
    
        // Get the user ID from localStorage
        const userId = JSON.parse(localStorage.getItem('token')).id;
    
        // Append the user ID and selected category to the form data
        formData.append('user_id', userId);
        formData.append('category', selectedCategory);
    
        fetch('http://localhost/logica-tcc/post.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {    
                // Redireciona para a página desaparecidos
                window.location.href = '/desaparecidos';
            } else {
                // Armazena a mensagem de sucesso no localStorage
                localStorage.setItem('successMessage', 'Novos posts foram adicionados!');

                // Armazena os dados inseridos na variável "selectedCategory"
                localStorage.setItem('selectedCategory', selectedCategory);
                window.location.href = '/desaparecidos';
            }
        })
        .catch(error => {
            console.error('Error sending the publication:', error);
        });
    };
    
    return(
        <form onSubmit={handleSubmit}>
            <div className="conteudo-tudo-publi">
                <div className="conteudo-titulo-publi">
                    <h2>Criar Publicação</h2>
                </div>
                <hr/>
                <div className="conteudo-nome-publi">
                    {/**Foto do usuario */}
                    <img src={imagem } alt="Foto de perfil" />
                    <b>
                        {/**Nome do Usuario */}
                        <p>{nome}</p>
                    </b>
                </div>
                {/* Legenda do Post */}
                <div className="text-desc">
                    <textarea
                        name="descricao"
                        id="descricao"
                        cols="10"
                        rows="80"
                        placeholder="O que está acontecendo?.."
                        value={caption}
                        onChange={handleCaptionChange}
                    ></textarea>
                </div>

                {/* Upload da Imagem */}
                <div className="upload-desc">
                    <label htmlFor='upload-img'>Foto &#187;</label>
                    <input
                        id="upload-img"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {/* Exibir a visualização da imagem */}
                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="Preview da imagem"
                            style={{ 
                                maxWidth: '200px', 
                                maxHeight: '150px', 
                                marginTop: '10px', 
                                border: '1px solid #000',
                                objectFit: 'cover'
                            }}
                        />
                    )}
                </div>
                <div className='seletor-radio'>
                    <h3>Selecione aonde você quer postar:</h3>
                <label>
                    <input
                        type='radio'
                        name='select'
                        value='desaparecidos'
                        checked={selectedCategory === 'desaparecidos'}
                        onChange={handleCategoryChange}
                    />
                    Desaparecidos
                </label>
                <label>
                    <input
                        type='radio'
                        name='select'
                        value='stajuda'
                        checked={selectedCategory === 'stajuda'}
                        onChange={handleCategoryChange}
                    />
                    Situação de Ajuda
                </label>
                {/* Botão de Publicar */}
                <button type='submit' className='btn-submit'>
                    Publicar
                </button>
                </div>
            </div>
        </form>
    );    
}