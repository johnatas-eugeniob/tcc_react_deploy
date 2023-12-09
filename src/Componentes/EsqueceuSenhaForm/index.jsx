import { useState } from "react";
import { Link } from "react-router-dom";

export default function EsqueceuForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar o e-mail para a API PHP
    const response = await fetch("http://localhost/logica-tcc/trocar_senha.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
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
            <h1>Vamos enviar um link para o seu email</h1>
          </div>
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <p className="input-label">DIGITE SEU EMAIL</p>
              <input
                type="email"
                name="email"
                placeholder="Seu Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br /><br /><br />
              <p className="register-p">
                Deseja alterar a entrada? <Link to="/seletor-login">Acesse</Link>
              </p>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
