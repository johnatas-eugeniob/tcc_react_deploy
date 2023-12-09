<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

// Incluir a conexão com o banco de dados
include_once 'conexao.php';

// Receber os dados do corpo da requisição
$data = json_decode(file_get_contents("php://input"));

try {
    // Verificar se o ID do post foi fornecido
    if (!isset($data->postId)) {
        throw new Exception('ID do post não fornecido.');
    }

    // Configuração para relatar erros
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // ID do post a ser excluído
    $postId = $data->postId;

    // Consulta SQL para excluir o post com o ID fornecido
    $sql = "DELETE FROM posts WHERE post_id = :postId";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':postId', $postId, PDO::PARAM_INT);

    // Executar a consulta
    if ($stmt->execute()) {
        // Se a exclusão for bem-sucedida, retornar uma resposta de sucesso
        echo json_encode(array('success' => true));
    } else {
        // Se ocorrer um erro durante a exclusão, retornar uma mensagem de erro
        echo json_encode(array('success' => false, 'error' => 'Erro ao excluir o post.'));
    }

} catch (Exception $e) {
    // Em caso de erro, retornar uma mensagem de erro
    echo json_encode(array('success' => false, 'error' => $e->getMessage()));
}
?>
