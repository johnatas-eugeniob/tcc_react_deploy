export const handleLogout = () => {
    // Limpa o token do localStorage
    localStorage.removeItem('token');
  
    // Redireciona o usuário para a página de login
    window.location.href = '/login';
  };
  