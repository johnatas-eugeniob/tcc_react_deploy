import './style.css';

export default function ModalDeletePubli({ postId, onConfirm }) {

  const handleDeletePost = () => {
    const body = JSON.stringify({ postId });

    // Fazer a solicitação para o script PHP
    fetch('http://localhost/logica-tcc/delete_post.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    })
      .then(response => response.json())
      .then(data => {
        // Verificar se a exclusão foi bem-sucedida antes de realizar mais ações
        if (data.success) {
          console.log('Post excluído com sucesso');
          window.location.href = '/meus-posts';
          // Chame a função onConfirm se desejar realizar mais ações após a exclusão
          if (onConfirm) {
            onConfirm();
          }
        } else {
          console.error('Erro ao excluir post:', data.error);
        }
      })
      .catch(error => {
        console.error('Erro ao excluir post:', error);
      });
  };

  return (
    <div className='container-delete'>
      <div className='delete-title'>
        <h3>Realmente deseja excluir seu post?</h3>
      </div>
      <div className='button-select'>
        <button className='yes' onClick={handleDeletePost}>Sim</button>
      </div>
    </div>
  );
}
