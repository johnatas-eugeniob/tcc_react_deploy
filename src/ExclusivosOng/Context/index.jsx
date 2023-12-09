import { createContext, useContext, useState, useEffect } from 'react';
import { enviarIdParaAPIOng } from '../OngAPI';

const UserContext = createContext();

export const OngProvider = ({ children }) => {
  const [dados, setDados] = useState({
    id: '',
    nome: '',
    imagem: '',
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      try {
        const tokenObj = JSON.parse(storedToken);
        const tokenId = tokenObj.id;

        const fetchData = async () => {
          const responseData = await enviarIdParaAPIOng(tokenId);
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

  return (
    <UserContext.Provider value={dados}>
      {children}
    </UserContext.Provider>
  );
};

export const useOng = () => {
  return useContext(UserContext);
};
