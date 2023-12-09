import './style.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { enviarIdParaAPIUser } from '../UserAPI';

export default function ExibirPerfil() {
    const [dados, setDados] = useState({
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
                    const responseData = await enviarIdParaAPIUser(tokenId);
                    if (responseData) {
                        setDados(responseData);
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
            formData.append('id', dados.id);
            formData.append('nome', novoNome || dados.nome);
            formData.append('telefone', novoTelefone || dados.telefone);
            if (novaImagem) {
                formData.append('imagem', novaImagem);
            }

            const response = await fetch('http://localhost/logica-tcc/update_user_perfil.php', {
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
        <div className='container'>
            <div className='container-title'>
                <h2>Perfil</h2>
            </div>
            <hr />
            <div className='window-between'>
                <div className='window-between-content'>
                    <div className='content-update'>
                        <div className='content-desc-img'>
                            <h3>Foto de Perfil</h3>
                            <label htmlFor='upload-img'>Nova Foto &#187;</label>
                            <input
                                id="upload-img"
                                type="file"
                                accept="image/*"
                                onChange={(e) => setNovaImagem(e.target.files[0])}
                            />
                        </div>
                        <div className='img-update'>
                            <img
                                src={dados.imagem}
                                alt="Imagem de Perfil"
                                className='perfil-img'
                            />
                        </div>
                    </div>
                    <hr />
                    <div className='content-update-input'>
                        <div className='content-desc'>
                            <h3>Nome da ONG</h3>
                        </div>
                        <div className='content-update-display-name'>
                            <div className='atual-name'>
                                <p><b>Nome atual: </b>{dados.nome}</p>
                            </div>
                            <div className='modify-name'>
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
            <div className='window-between'>
                <div className='window-between-content'>
                    <div className='content-update-input'>
                        <div className='content-desc'>
                            <h3>Telefone da ONG</h3>
                        </div>
                        <div className='content-update-display-name'>
                            <div className='atual-name'>
                                <p><b>Tel atual: </b>{dados.telefone}</p>
                            </div>
                            <div className='modify-name'>
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
                    <div className='content-update-input-buttons'>
                        <div className='content-desc'>
                            <button onClick={handleAtualizar}>Atualizar Info</button>
                        </div>
                        <div className='content-desc'>
                            <Link to='/trocar-senha'><button>Atualizar senha</button></Link>
                        </div>
                        <div className='content-desc-delete'>
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