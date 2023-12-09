<?php

// Cabecalhos obrigatorios
header("Access-Control-Allow-Origin: https://main--acpetshelper.netlify.app");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
//header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");

// Incluir a conexao
include_once 'conexao.php';

$response_json = file_get_contents("php://input");
$dados = json_decode($response_json, true);

if ($dados) {
    // Verificar se o nome de usuário ou email já existe
    $check_query = "SELECT id FROM user WHERE (nome = :nome OR email = :email) AND id != :id";
    $check_user = $conn->prepare($check_query);

    $check_user->bindParam(':id', $dados['id'], PDO::PARAM_INT);
    $check_user->bindParam(':nome', $dados['nome'], PDO::PARAM_STR);
    $check_user->bindParam(':email', $dados['email'], PDO::PARAM_STR);

    $check_user->execute();

    if ($check_user->rowCount() > 0) {
        $response = [
            "erro" => true,
            "mensagem" => "Nome de usuário ou email já existe!"
        ];
    } else {
        // Se o nome de usuário ou email não existe, proceda com a atualização
        $query_user = "UPDATE user SET nome=:nome, email=:email, senha=:senha, telefone=:telefone, cep=:cep, rua=:rua, bairro=:bairro WHERE id=:id";
        $edit_user = $conn->prepare($query_user);

        $edit_user->bindParam(':id', $dados['id'], PDO::PARAM_INT);
        $edit_user->bindParam(':nome', $dados['nome'], PDO::PARAM_STR);
        $edit_user->bindParam(':email', $dados['email'], PDO::PARAM_STR);
        $edit_user->bindParam(':senha', $dados['senha'], PDO::PARAM_STR);
        $edit_user->bindParam(':telefone', $dados['telefone'], PDO::PARAM_STR);
        $edit_user->bindParam(':cep', $dados['cep'], PDO::PARAM_STR);
        $edit_user->bindParam(':rua', $dados['rua'], PDO::PARAM_STR);
        $edit_user->bindParam(':bairro', $dados['bairro'], PDO::PARAM_STR);

        $edit_user->execute();

        if ($edit_user->rowCount()) {
            $response = [
                "erro" => false,
                "mensagem" => "Usuário editado com sucesso!"
            ];
        } else {
            $response = [
                "erro" => true,
                "mensagem" => "Usuário não editado com sucesso!"
            ];
        }
    }
} else {
    $response = [
        "erro" => true,
        "mensagem" => "Dados não recebidos!"
    ];
}

http_response_code(200);
echo json_encode($response);
