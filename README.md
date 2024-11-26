
# **Ajuda Animal - Rede Social para Animais Desaparecidos e em Situação de Ajuda**

**Descrição:**
Ajuda Animal é um aplicativo web desenvolvido para conectar pessoas que desejam ajudar ou que estão procurando por animais desaparecidos. A plataforma funciona como uma rede social onde os usuários podem compartilhar relatos sobre o desaparecimento de animais ou sobre animais que necessitam de ajuda. Com funcionalidades de postagem, interação entre usuários e uma opção de doação via PIX, o sistema visa facilitar o encontro de animais desaparecidos e promover o auxílio a animais em situação de necessidade.

---

## **Funcionalidades**

- **Cadastro e Login:**
  - O sistema permite que os usuários se cadastrem e acessem a plataforma com login e senha.
  
- **Postagens de Relatos:**
  - Os usuários podem criar posts informando sobre o desaparecimento de animais ou sobre animais em situação de ajuda. 
  - Cada postagem contém informações cruciais como a data de desaparecimento e a última localização conhecida do animal.

- **Interações entre Usuários:**
  - A plataforma permite que os usuários interajam por meio de comentários, ajudando a divulgar mais informações ou oferecendo ajuda.

- **Doações via PIX:**
  - A aba de doações permite que os usuários realizem contribuições financeiras para ajudar no resgate de animais ou em causas relacionadas.

---

## **Tecnologias Utilizadas**

- **Frontend:**
  - **React:** Biblioteca JavaScript para a construção da interface do usuário (UI).
  - **CSS:** Estilização do layout e design responsivo da aplicação.

- **Backend:**
  - **PHP:** Linguagem de programação para a implementação da lógica do servidor.
  - **MySQL:** Sistema de gerenciamento de banco de dados para armazenar informações dos usuários, posts, e doações.

---

## **Como Rodar o Projeto Localmente**

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/usuario/ajuda-animal.git
   ```

2. **Instale as dependências do frontend:**
   Navegue até a pasta do frontend e instale as dependências:
   ```bash
   cd ajuda-animal/frontend
   npm install
   ```

3. **Configuração do Backend:**
   - Certifique-se de ter o **PHP** e o **MySQL** instalados.
   - Crie um banco de dados no MySQL com o nome `ajuda_animal`.
   - Importe o arquivo `database.sql` para criar as tabelas no banco de dados.

4. **Configuração do arquivo `.env`:**
   - No diretório do backend, crie um arquivo `.env` com as configurações do banco de dados.
   ```plaintext
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=sua_senha
   DB_NAME=ajuda_animal
   ```

5. **Suba o servidor:**
   - Inicie o servidor do backend em PHP (em um servidor local ou utilizando ferramentas como o XAMPP ou MAMP).
   - Inicie o servidor de desenvolvimento do frontend:
   ```bash
   npm start
   ```

6. Acesse a aplicação localmente no navegador em `http://localhost:3000`.

---

## **Contribuindo**

1. Faça o **fork** deste repositório.
2. Crie uma **branch** para a sua feature (`git checkout -b feature/nova-feature`).
3. Faça as alterações e **commit** (`git commit -m 'Adicionando nova feature'`).
4. **Push** para a branch (`git push origin feature/nova-feature`).
5. Abra um **pull request**.

---

## **Licença**

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais informações.

---

**Contato:**
- [Seu Nome](https://www.linkedin.com/in/seu-nome)
- Email: seuemail@dominio.com
