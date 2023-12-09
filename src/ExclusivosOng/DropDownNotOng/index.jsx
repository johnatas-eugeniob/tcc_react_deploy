import { useState, useEffect } from 'react';

function ModalNotOng() {
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Recupera as informações do localStorage quando o componente é montado
    const storedSuccessMessage = localStorage.getItem('successMessage');
    const storedSelectedCategory = localStorage.getItem('selectedCategory');

    setSuccessMessage(storedSuccessMessage || '');
    setSelectedCategory(storedSelectedCategory || '');
  }, []);

  return (
    <aside id='dropDown' className='dropDown'>
      <div className='not-container'>
        <p>
          {successMessage || 'Nenhuma nova mensagem'} {/* Exibe a mensagem de sucesso ou um texto padrão */}
            {selectedCategory}
        </p>
      </div>
    </aside>
  );
}

export default ModalNotOng;
