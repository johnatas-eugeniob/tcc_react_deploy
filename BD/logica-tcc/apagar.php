<?php

//Cabecalhos obrigatorios
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");

//Incluir a conexao
include_once 'conexao.php';

$id = filter_input(INPUT_GET, "id", FILTER_SANITIZE_NUMBER_INT);

$response = "";

$query_user = "DELETE FROM user WHERE id=:id LIMIT 1";
$delete_user = $conn->prepare($query_user);
$delete_user->bindParam(':id', $id, PDO::PARAM_INT);

if($delete_user->execute()){
    $response = [
        "erro" => false,
        "mensagem" => "Usuario apagado com sucesso!"
    ];
}else{
    $response = [
        "erro" => true,
        "mensagem" => "Erro: Usuario não apagado com sucesso!"
    ];
}

http_response_code(200);
echo json_encode($response);
