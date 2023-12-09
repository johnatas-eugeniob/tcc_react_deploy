<?php
//parte do react
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Inclua a configuração do banco de dados e o PHPMailer
require 'conexao.php';
require 'lib/vendor/autoload.php';

// Verifica se o e-mail foi fornecido no POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dados = json_decode(file_get_contents("php://input"), true);
    $emailUsuario = $dados['email'];

    // Verifica se o e-mail existe no banco de dados
    $query_verifica_email = "SELECT * FROM user WHERE email = :emailUsuario";
    $verifica_email = $conn->prepare($query_verifica_email);
    $verifica_email->bindParam(':emailUsuario', $emailUsuario, PDO::PARAM_STR);
    $verifica_email->execute();
    $usuario = $verifica_email->fetch(PDO::FETCH_ASSOC);

    if ($usuario) {
        // Envia o e-mail com a mensagem
        $mail = new PHPMailer(true);

        try {
            // Configurações do servidor SMTP
            $mail->isSMTP();
            $mail->CharSet = "UTF-8";
            $mail->Host = 'sandbox.smtp.mailtrap.io';
            $mail->SMTPAuth = true;
            $mail->Port = 2525;
            $mail->Username = '73262e7a3c5f3f';
            $mail->Password = '34fb7c6784f0b4';

            // Remetente e destinatário
            $mail->setFrom('acpetshelper@gmail.com', 'AC Pets Hleper');
            $mail->addAddress($emailUsuario, $usuario['nome']);

            // Conteúdo do e-mail
            $mail->isHTML(true);
            $mail->Subject = 'Recuperação de Senha';
            $mail->Body = 'Olá ' . $usuario['nome'] . ',<br><br>Você solicitou a recuperação de senha. Aqui estão as instruções para redefinir sua senha.
            Siga o link para redefinir sua senha: <a href="http://localhost:5173/trocar-senha" target="_blank" rel="noopener noreferrer">Clique aqui</a>';

            // Envia o e-mail
            $mail->send();

            echo json_encode(['success' => true, 'message' => 'Um e-mail foi enviado com as instruções para recuperar a senha.']);
        } catch (Exception $e) {
            echo json_encode(['success' => false, 'message' => 'Erro ao enviar o e-mail. Tente novamente mais tarde.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'E-mail não encontrado.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método inválido.']);
}
?>
