<?php
// Cabeçalhos obrigatórios
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Incluir a conexão
include_once 'conexao.php';

try {    
    // Configuração para relatar erros
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Consulta SQL para recuperar os posts onde categoria_post é igual a "desaparecidos"
    $sql = "SELECT posts.*, user.nome, user.imagem, 'posts' AS table_name FROM posts
            INNER JOIN user ON posts.user_id = user.id
            WHERE posts.categoria_post = 'desaparecidos'
            ORDER BY posts.post_id DESC";

    $stmt = $conn->prepare($sql);
    $stmt->execute();

    // Preparar um array para armazenar os resultados
    $resultArray = array();

    // Obter os dados do banco de dados
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // Adiciona o nome da tabela ao array
        $resultArray[] = $row;
    }

    // Retornar os dados no formato JSON
    header('Content-Type: application/json');
    echo json_encode($resultArray);
} catch (PDOException $e) {
    // Em caso de erro, exibir mensagem de erro
    echo json_encode(array('error' => $e->getMessage()));
}
?>
