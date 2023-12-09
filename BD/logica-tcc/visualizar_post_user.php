<?php
// Cabecalhos obrigatórios
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

// Incluir a conexao
include_once 'conexao.php';

$data = json_decode(file_get_contents("php://input"));
try {
    // Obter o ID do usuário da requisição
    $userId = filter_var($data->id, FILTER_SANITIZE_NUMBER_INT);

    // Verificar se o ID do usuário foi fornecido
    if ($userId === null) {
        throw new Exception('ID do usuário não fornecido.');
    }

    // Configuração para relatar erros
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Consulta SQL para recuperar os posts da tabela 'posts'
    $sqlPosts = "SELECT posts.*, user.nome, user.imagem FROM posts
                 INNER JOIN user ON posts.user_id = user.id
                 WHERE posts.user_id = :user_id";

    // Combina os resultados das duas consultas usando UNION
    $sql = "($sqlPosts) ORDER BY post_id DESC";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':user_id', $userId, PDO::PARAM_INT);
    $stmt->execute();

    // Preparar um array para armazenar os resultados
    $resultArray = array();

    // Obter os dados do banco de dados
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $resultArray[] = $row;
    }

    // Retornar os dados no formato JSON
    header('Content-Type: application/json');
    echo json_encode($resultArray);

} catch (Exception $e) {
    // Em caso de erro, exibir mensagem de erro
    echo json_encode(array('error' => $e->getMessage()));
}
?>
