<?php
// Cabeçalhos obrigatórios
header("Access-Control-Allow-Origin: https://main--acpetshelper.netlify.app");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

// Verifica se é uma requisição POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Conecta ao banco de dados
    include_once 'conexao.php';

    // Obtém os dados do formulário
    $user_id = $_POST['user_id'];
    $caption = $_POST['caption'];
    $categoria_post = $_POST['category'];  // Novo campo para a escolha do usuário
    $walkin = 'http://localhost/logica-tcc';

    // Trata o upload da imagem
    $image_path = './img/' . basename($_FILES["image"]["name"]);
    $image_walk = $walkin . $image_path;

    if (file_put_contents($image_path, file_get_contents($_FILES["image"]["tmp_name"]))) {

        // Insere os dados na tabela correspondente
        // Usando Prepared Statements com PDO
        $sql = "INSERT INTO posts (user_id, caption, image_path, categoria_post) VALUES (:user_id, :caption, :image_path, :categoria_post)";

        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':user_id', $user_id, PDO::PARAM_INT);
        $stmt->bindParam(':caption', $caption, PDO::PARAM_STR);
        $stmt->bindParam(':image_path', $image_walk, PDO::PARAM_STR);
        $stmt->bindParam(':categoria_post', $categoria_post, PDO::PARAM_STR);

        if ($stmt->execute()) {
            $response = [
                "erro" => false,
                "mensagem" => "Publicação inserida com sucesso"
            ];
        } else {
            $response = [
                "erro" => true,
                "mensagem" => "Erro ao inserir publicação: " . $stmt->errorInfo()[2]
            ];
        }
        $stmt->closeCursor(); // Limpa os resultados do cursor

    } else {
        $response = [
            "erro" => true,
            "mensagem" => "Erro no upload da imagem"
        ];
    }
} else {
    $response = [
        "erro" => false,
        "mensagem" => "Método de requisição não suportado"
    ];
}

http_response_code(200);
echo json_encode($response);
