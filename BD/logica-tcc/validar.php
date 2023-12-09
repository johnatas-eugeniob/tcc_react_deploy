<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

// Inclua o arquivo de conexão com o banco de dados
include_once 'conexao.php';

// Recebe os dados do formulário
$data = json_decode(file_get_contents('php://input'));

if (isset($data->email) && isset($data->senha)) {
    $email = $data->email;
    $senha = $data->senha;

    // Consulta o banco de dados para encontrar o usuário com base no email
    $query = "SELECT * FROM user WHERE email = :email";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {     
        if (password_verify($senha, $user['senha'])) {
            if ($user['sit_user_id'] === 1) { 
                // Definição da chave secreta do token JWT
                $secret = "ESYNZRm$8$6&PVU^gysLWakwn8HAR%@c'";
                // Criação do token JWT
                $header = json_encode([
                    "alg" => "HS256",
                    "typ" => "JWT"
                ]);
                $payload = json_encode([
                    'id' => $user['id'],
                    'entrada' => 'Usuario'                  
                ]);
                //$signature = hash_hmac("sha256", $header . "." . $payload, $secret);
                $token = $payload;

                $response = [
                    'erro' => "false",
                    'mensagem' => "Login bem-sucedido",
                    'token' => $token
                ];
            } else {
                $response = [
                    'erro' => "aviso",
                    'mensagem' => "Usuário não está ativo."
                ];
            }
        } else {
            $response = [
                'erro' => "true",
                'mensagem' => "Senha incorreta tente novamente"
            ];
        }
    } else {
        $response = [
            'erro' => "true",
            'mensagem' => "Usuário não encontrado"
        ];
    }
} else {
    $response = ['erro' => "true",
                'mensagem' => "Dados incompletos"
            ];
}
http_response_code(200);
echo json_encode($response);
?>