<?php
//parte do react
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

// Inclua a configuração do banco de dados
include_once 'conexao.php';

$response_json = file_get_contents("php://input");
$dados = json_decode($response_json, true);

if ($dados) {
    $emailUsuario = $dados['email'];
    $novaSenha = $dados['senha'];

    // Atualize a senha no banco de dados
    $senhaHash = password_hash($novaSenha, PASSWORD_DEFAULT);
    $query = "UPDATE user SET senha = :senhaHash WHERE email = :emailUsuario";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':senhaHash', $senhaHash, PDO::PARAM_STR);
    $stmt->bindParam(':emailUsuario', $emailUsuario, PDO::PARAM_STR);
    $stmt->execute();

    if ($stmt->rowCount()) {
        $response = ['success' => true, 'message' => 'Senha atualizada com sucesso.'];
    } else {
        $response = ['success' => false, 'message' => 'Erro ao atualizar a senha.'];
    }
} else {
    $response = ['success' => false, 'message' => 'Dados não fornecidos.'];
}

http_response_code(200);
echo json_encode($response);
?>
