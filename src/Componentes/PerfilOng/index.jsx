import './style.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { enviarIdParaAPIOng } from '../../ExclusivosOng/OngAPI'

export default function ExibirPerfilOng() {
  const [dadosOng, setDadosOng] = useState({
    id: '',
    nome: '',
    telefone: '',
    imagem: '',
});

const [novoNome, setNovoNome] = useState('');
const [novoTelefone, setNovoTelefone] = useState('');
const [novaImagem, setNovaImagem] = useState(null);

useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
        try {
            const tokenObj = JSON.parse(storedToken);
            const tokenId = tokenObj.id;

            // Chama a função para enviar o ID para a API
            const fetchData = async () => {
                const responseData = await enviarIdParaAPIOng(tokenId);
                if (responseData) {
                    setDadosOng(responseData);
                }
            };

            fetchData();
        } catch (error) {
            console.error('Erro ao fazer parsing do token JSON', error);
        }
    }
}, []);

const handleAtualizar = async () => {
    try {
        const formData = new FormData();
        formData.append('id', dadosOng.id);
        formData.append('nome', novoNome || dadosOng.nome);
        formData.append('telefone', novoTelefone || dadosOng.telefone);
        if (novaImagem) {
            formData.append('imagem', novaImagem);
        }

        const response = await fetch('http://localhost/logica-tcc/update_user_perfil_ong.php', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Resposta da API:', responseData);

            // Atualize o estado conforme necessário
            // setDados(novosDados);
        } else {
            console.error('Erro ao enviar dados para a API:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao enviar dados para a API', error);
    }
};

  // Função para enviar o ID para a API
  return (
    <div className='container-ong'>
            <div className='container-title-ong'>
                <h2>Perfil</h2>
            </div>
            <hr />
            <div className='window-between-ong'>
                <div className='window-between-content-ong'>
                    <div className='content-update-ong'>
                        <div className='content-desc-img-ong'>
                            <h3>Foto de Perfil</h3>
                            <label htmlFor='upload-img'>Nova Foto &#187;</label>
                            <input
                                id="upload-img"
                                type="file"
                                accept="image/*"
                                onChange={(e) => setNovaImagem(e.target.files[0])}
                            />
                        </div>
                        <div className='img-update-ong'>
                            <img
                                src={dadosOng.imagem}
                                alt="Imagem de Perfil"
                                className='perfil-img-ong'
                            />
                        </div>
                    </div>
                    <hr />
                    <div className='content-update-input-ong'>
                        <div className='content-desc-ong'>
                            <h3>Nome da ONG</h3>
                        </div>
                        <div className='content-update-display-name-ong'>
                            <div className='atual-name-ong'>
                                <p><b>Nome atual: </b>{dadosOng.nome}</p>
                            </div>
                            <div className='modify-name-ong'>
                                <p><b>Novo nome:</b></p>
                                <input
                                    type="text"
                                    placeholder='Novo nome...'
                                    value={novoNome}
                                    onChange={(e) => setNovoNome(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/**Tamarasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}
            <hr />
            <div className='window-between-ong'>
                <div className='window-between-content-ong'>
                    <div className='content-update-input-ong'>
                        <div className='content-desc-ong'>
                            <h3>Telefone da ONG</h3>
                        </div>
                        <div className='content-update-display-name-ong'>
                            <div className='atual-name-ong'>
                                <p><b>Tel atual: </b>{dadosOng.telefone}</p>
                            </div>
                            <div className='modify-name-ong'>
                                <p><b>Novo tel:</b> 
                                <input
                                    type="text"
                                    placeholder='Novo telefone...'
                                    value={novoTelefone}
                                    onChange={(e) => setNovoTelefone(e.target.value)}
                                /></p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='content-update-input-ong-buttons'>
                        <div className='content-desc-ong'>
                            <button onClick={handleAtualizar}>Atualizar Info</button>
                        </div>
                        <div className='content-desc-ong'>
                            <Link to='/trocar-senha'><button>Atualizar senha</button></Link>
                        </div>
                        <div className='content-desc-delete-ong'>
                            <button>Excluir a conta</button>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <hr />

        </div>
  )
}