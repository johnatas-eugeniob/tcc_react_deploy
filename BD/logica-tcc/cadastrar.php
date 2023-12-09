<?php
//parte do php
use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'lib/vendor/autoload.php';

//parte do react
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

include_once 'conexao.php';

$response_json = file_get_contents("php://input");
$dados = json_decode($response_json, true);

if ($dados) {
    $nomeUsuario = $dados['user']['nome'];
    $emailUsuario = $dados['user']['email'];

    // Verifique se o nome de usuário já existe
    $query_verifica_usuario = "SELECT COUNT(*) FROM user WHERE nome = :nomeUsuario";
    $verifica_usuario = $conn->prepare($query_verifica_usuario);
    $verifica_usuario->bindParam(':nomeUsuario', $nomeUsuario, PDO::PARAM_STR);
    $verifica_usuario->execute();

    // Verifique se o email já existe
    $query_verifica_email = "SELECT COUNT(*) FROM user WHERE email = :emailUsuario";
    $verifica_email = $conn->prepare($query_verifica_email);
    $verifica_email->bindParam(':emailUsuario', $emailUsuario, PDO::PARAM_STR);
    $verifica_email->execute();

    if ($verifica_usuario->fetchColumn() > 0) {
        $response = [
            "erro" => true,
            "mensagem" => "Nome de usuário já existe!"
        ];
    } elseif ($verifica_email->fetchColumn() > 0) {
        $response = [
            "erro" => true,
            "mensagem" => "Email já existe!"
        ];
    } else {
        $senhaHash = password_hash($dados['user']['senha'], PASSWORD_DEFAULT);
        $tokenConfirmacao = password_hash($dados['user']['email'] . date("Y-m-d H:i:s"), PASSWORD_DEFAULT);

        $query_user = "INSERT INTO user (nome, email, senha, telefone, cep, rua, bairro, cidade, token) VALUES (:nome, :email, :senha, :telefone, :cep, :rua, :bairro, :cidade, :token)";
        $cad_user = $conn->prepare($query_user);

        $cad_user->bindParam(':nome', $dados['user']['nome'], PDO::PARAM_STR);
        $cad_user->bindParam(':email', $dados['user']['email'], PDO::PARAM_STR);
        $cad_user->bindParam(':senha', $senhaHash, PDO::PARAM_STR);
        $cad_user->bindParam(':telefone', $dados['user']['telefone'], PDO::PARAM_STR);
        $cad_user->bindParam(':cep', $dados['user']['cep'], PDO::PARAM_STR);
        $cad_user->bindParam(':rua', $dados['user']['rua'], PDO::PARAM_STR);
        $cad_user->bindParam(':bairro', $dados['user']['bairro'], PDO::PARAM_STR);
        $cad_user->bindParam(':cidade', $dados['user']['cidade'], PDO::PARAM_STR);
        $cad_user->bindParam(':token', $tokenConfirmacao, PDO::PARAM_STR);

        $cad_user->execute();


        if ($cad_user->rowCount()) {
            $mail = new PHPMailer(true);

            try {
                //Server settings
                //$mail->SMTPDebug = SMTP::DEBUG_SERVER;
                $mail = new PHPMailer();
                $mail->CharSet = "UTF-8";
                $mail->isSMTP();
                $mail->Host = 'sandbox.smtp.mailtrap.io';
                $mail->SMTPAuth = true;
                $mail->Port = 2525;
                $mail->Username = '73262e7a3c5f3f';
                $mail->Password = '34fb7c6784f0b4';

                //Recipients
                $mail->setFrom('acpetshelper@gmail.com', 'AC Pets Hleper'); //quem está enviando
                $mail->addAddress( $dados['user']['email'], $dados['user']['nome']);//quem receberá
                $mail->isHTML(true);//Set email format to HTML
                $mail->Subject = 'Confirma o e-mail';
                $mail->Body    = "Prezado(a) " . $dados['user']['nome'] . ".<br><br>Agradecemos a sua solicitação de cadastramento em nosso site!<br><br>Para que possamos liberar o seu cadastro em nosso sistema, solicitamos a confirmação do e-mail clicanco no link abaixo: <br><br> <a href='http://localhost/logica-tcc/confirmar-email.php?tokenConfirmacao=$tokenConfirmacao'>Clique aqui</a><br><br>Esta mensagem foi enviada a você pela empresa AC Pets Helper.<br>Você está recebendo porque está cadastrado no banco de dados da empresa AC Pets Helper. Nenhum e-mail enviado pela empresa AC Pets Helper tem arquivos anexados ou solicita o preenchimento de senhas e informações cadastrais.<br><br>" ;
                $mail->AltBody = "Prezado(a) " . $dados['user']['nome'] . ".\n\nAgradecemos a sua solicitação de cadastramento em nosso site!\n\nPara que possamos liberar o seu cadastro em nosso sistema, solicitamos a confirmação do e-mail clicanco no link abaixo: \n\n http://localhost/logica-tcc/confirmar-email.php?tokenConfirmacao=$tokenConfirmacao \n\nEsta mensagem foi enviada a você pela empresa AC Pets Helper.\nVocê está recebendo porque está cadastrado no banco de dados da empresa AC Pets Helper. Nenhum e-mail enviado pela empresa AC Pets Helper tem arquivos anexados ou solicita o preenchimento de senhas e informações cadastrais.\n\n";

                $mail->send();

                $response = ['erro' => false, 'mensagem' => "Usuário cadastrado com sucesso! Acesse a caixa de e-mail para confimar o e-mail!"];

            } catch (Exception $e) {
                //$retorna = ['erro' => true, 'mensagem' => "<div class='alert alert-danger' role='alert'>Erro: Usuário não cadastrado com sucesso!</div>"];
                $response = ['erro' => true, 'mensagem' => "Erro: Usuário não cadastrado com sucesso."];
            }
        } else {
            $response = [
                "erro" => true,
                "mensagem" => "Usuário não cadastrado com sucesso!"
            ];
        }
    }
} else {
    $response = [
        "erro" => true,
        "mensagem" => "Dados não fornecidos"
    ];
}

http_response_code(200);
echo json_encode($response);
?>
