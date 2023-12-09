import { useState } from "react";
import { Link } from "react-router-dom";

export default function TrocarSenhaForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar os dados para a API PHP
    const response = await fetch("http://localhost/logica-tcc/update_senha.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    });

    const result = await response.json();

    // Lógica para lidar com a resposta da API (pode redirecionar o usuário, exibir uma mensagem, etc.)
    console.log(result);
  };

  return (
    <div className="container-form-login">
      <div className="form-login">
        <div className="container-form">
          <div className="login-title">
            <h1>Alteração de Senha</h1>
          </div>
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <p className="input-label">Insira seu email</p>
              <input
                type="email"
                name="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br /><br />
              <p className="input-label">Insira uma nova senha</p>
              <input
                type="password"
                name="senha"
                placeholder="Nova senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <br />
              <button type="submit">Enviar</button>
              <br /><br />
              <p className="register-p">
                Deseja alterar a entrada? <Link to="/seletor-login">Acesse</Link>
              </p> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
