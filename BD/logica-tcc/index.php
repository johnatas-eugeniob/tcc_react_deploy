<?php

//Cabecalhos obrigatorios
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");

//Incluir a conexao
include_once 'conexao.php';

$query_user = "SELECT id, nome, email, senha, telefone, cep, rua, bairro, sit_user_id FROM user ORDER BY id DESC";
$result_user = $conn->prepare($query_user);
$result_user->execute();

if(($result_user) AND ($result_user->rowCount() != 0)){
    while($row_user = $result_user->fetch(PDO::FETCH_ASSOC)){
        extract($row_user);

        $lista_user["records"][$id] = [
            'id' => $id,
            'nome' => $nome,
            'email' => $email,
            'senha' => $senha,
            'telefone' => $telefone,
            'cep' => $cep,
            'rua' => $rua,
            'bairro' => $bairro,
            'sit_user_id' => $sit_user_id
        ];
    }

    //Resposta com status 200
    http_response_code(200);

    //Retornar os user em formato json
    echo json_encode($lista_user);
}