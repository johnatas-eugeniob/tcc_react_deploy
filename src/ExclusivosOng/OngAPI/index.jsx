// apiUtils.js
export const enviarIdParaAPIOng = async (id) => {
    try {
      const data = { id: id };
  
      const response = await fetch('http://localhost/logica-tcc/visualizar-ong.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        return responseData.user;
      } else {
        console.error('Falha ao enviar o ID para a API');
        return null;
      }
    } catch (error) {
      console.error('Erro ao enviar o ID para a API', error);
      return null;
    }
  };
  