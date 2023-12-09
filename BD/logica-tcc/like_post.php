<?php
//parte do react
header("Access-Control-Allow-Origin: https://main--acpetshelper.netlify.app");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

include_once 'conexao.php';

$postId = filter_input(INPUT_GET, 'post_id', FILTER_SANITIZE_NUMBER_INT);

try {
    // Verificar se o postId foi fornecido
    if ($postId === null) {
        throw new Exception('ID do post não fornecido.');
    }

    // Incrementar o contador de curtidas no banco de dados
    $sql = "UPDATE posts SET likes = likes + 1 WHERE post_id = :post_id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':post_id', $postId, PDO::PARAM_INT);
    $stmt->execute();

    header('Content-Type: application/json');
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
