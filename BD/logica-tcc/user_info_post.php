<?php
// Cabeçalhos obrigatórios
header("Access-Control-Allow-Origin: https://main--acpetshelper.netlify.app");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

// Incluir a conexão
include_once 'conexao.php';

// Obtém o post_id da solicitação
$postId = $_GET['post_id'];

// Consulta SQL para obter informações do post e do usuário
$sql = "SELECT posts.*, user.nome, user.imagem, user.cidade, user.bairro, user.telefone 
        FROM posts 
        INNER JOIN user ON posts.user_id = user.id 
        WHERE posts.post_id = :post_id";

// Preparar a declaração
$stmt = $conn->prepare($sql);

// Atribuir valores aos parâmetros
$stmt->bindParam(':post_id', $postId, PDO::PARAM_INT);

// Executar a consulta
$stmt->execute();

// Verificar se a consulta foi bem-sucedida
if ($stmt->rowCount() > 0) {
    // Obter os resultados
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    // Criar o array de informações
    $postInfo = [
        'nome' => $row['nome'],
        'imagem' => $row['imagem'],
        'cidade' => $row['cidade'],
        'bairro' => $row['bairro'],
        'telefone' => $row['telefone'],
        // Adicionar outras colunas conforme necessário
    ];

    // Retorna os dados como JSON
    echo json_encode($postInfo);
} else {
    // Post não encontrado
    echo json_encode(['error' => 'Post não encontrado']);
}

// Fecha a conexão com o banco de dados
$conn = null;
