<?php
//parte do react
header("Access-Control-Allow-Origin: https://main--acpetshelper.netlify.app");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

include_once 'conexao.php';

// Receber dados do POST
$id = $_POST['id'];
$novoNome = $_POST['nome'];
$novoTelefone = $_POST['telefone'];
$walkin = 'http://localhost/logica-tcc';

// Verificar se foi enviado um arquivo de imagem
if (isset($_FILES['imagem']) && $_FILES['imagem']['error'] == UPLOAD_ERR_OK) {
    $imagemTmpName = $_FILES['imagem']['tmp_name'];
    $imagemName = $_FILES['imagem']['name'];

    // Mova o arquivo para o diretório desejado
    $image_path = './img/' . $imagemName;
    $image_walk = $walkin . $image_path;
    move_uploaded_file($imagemTmpName, $imagem_walk);

    // Atualize o caminho da imagem no banco de dados
    $sql = "UPDATE ong SET imagem = '$imagem_walk' WHERE id = $id";
    $conn->query($sql);
}

// Atualizar outros campos, se fornecidos
if ($novoNome) {
    $sql = "UPDATE ong SET nome = '$novoNome' WHERE id = $id";
    $conn->query($sql);
}

if ($novoTelefone) {
    $sql = "UPDATE ong SET telefone = '$novoTelefone' WHERE id = $id";
    $conn->query($sql);
}

// Fechar a conexão com o banco de dados
$conn->close();

// Responder com sucesso
echo json_encode(['mensagem' => 'Dados atualizados com sucesso']);
