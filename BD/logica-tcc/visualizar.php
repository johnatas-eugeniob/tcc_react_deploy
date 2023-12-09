<?php

// Cabecalhos obrigatórios
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

// Incluir a conexao
include_once 'conexao.php';

// Receber dados do corpo da requisição
$data = json_decode(file_get_contents("php://input"));

// Verificar se o ID foi recebido
if (!empty($data->id)) {
    $id = filter_var($data->id, FILTER_SANITIZE_NUMBER_INT);

    $query_user = "SELECT id, nome, telefone, imagem FROM user WHERE id=:id LIMIT 1";
    $result_user = $conn->prepare($query_user);
    $result_user->bindParam(':id', $id, PDO::PARAM_INT);
    $result_user->execute();

    if (($result_user) && ($result_user->rowCount() != 0)) {
        $row_user = $result_user->fetch(PDO::FETCH_ASSOC);
        extract($row_user);

        $user = [
            'id' => $id,
            'nome' => $nome,
            'telefone' => $telefone,
            'imagem' => $imagem
        ];

        $response = [
            "erro" => false,
            "user" => $user
        ];
    } else {
        $response = [
            "erro" => true,
            "messagem" => "Usuario não encontrado!"
        ];
    }
} else {
    $response = [
        "erro" => true,
        "messagem" => "ID não fornecido!"
    ];
}

http_response_code(200);
echo json_encode($response);
