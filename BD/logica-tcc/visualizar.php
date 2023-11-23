<?php

//Cabecalhos obrigatorios
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");

//Incluir a conexao
include_once 'conexao.php';

//$id = 3;
$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);
$response = "";

$query_user = "SELECT id, nome, email, senha, telefone, cep, rua, bairro, cidade FROM user WHERE id=:id LIMIT 1";
$result_user = $conn->prepare($query_user);
$result_user->bindParam(':id', $id, PDO::PARAM_INT);
$result_user->execute();

if(($result_user) AND ($result_user->rowCount() != 0)){
    $row_user = $result_user->fetch(PDO::FETCH_ASSOC);
    extract($row_user);

    $user = [
        'id' => $id,  
        'nome' => $nome,
        'email' => $email,
        'senha' => $senha,
        'telefone' => $telefone,
        'cep' => $cep,
        'rua' => $rua,
        'bairro' => $bairro,
        'cidade' => $cidade
    ];

    $response = [
        "erro"=> false,
        "user" => $user
    ];
}else{
    $response = [
        "erro"=> true,
        "messagem" => "Usuario não encontrado!"
    ];
}
http_response_code(200);
echo json_encode($response);
