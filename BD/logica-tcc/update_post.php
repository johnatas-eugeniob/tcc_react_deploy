<?php
// Cabecalhos obrigatórios
header("Access-Control-Allow-Origin: https://main--acpetshelper.netlify.app");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Incluir a conexao
include_once 'conexao.php';

try {
    // Configuração para relatar erros
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Recebe os dados do formulário
    $post_id = $_POST['post_id'];
    $caption = $_POST['caption'];
    $status = $_POST['status'];
    $tableName = $_POST['table_name'];
    $walkin = 'http://localhost/logica-tcc';

    // Construa a query com base no nome da tabela recebido
    $sql = "UPDATE $tableName SET ";

    // Verifique se a imagem está sendo enviada
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $image_path = './img/' . basename($_FILES['image']['name']);
        $image_walk = $walkin . $image_path;
        move_uploaded_file($_FILES['image']['tmp_name'], $image_walk);

        $sql .= "image_path='$image_walk', ";
    }
    // Construa os nomes das colunas dinamicamente
    $user_id_column = 'user_id';
    $caption_column = 'caption';
    $image_path_column = 'image_path';
    $post_id_column = 'post_id';


    $sql .= "$image_path_column='$image_walk', ";

    if ($tableName === 'posts') {
        $sql .= "$caption_column='$caption'";
    } elseif ($tableName === 'posts_st') {
        $sql .= "status_st='$status'";
    }

    $sql .= " WHERE $post_id_column=$post_id"; // Altere esta linha

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array('success' => true));
    } else {
        echo json_encode(array('success' => false, 'error' => 'Erro ao atualizar a publicação: ' . $conn->error));
    }

    $conn->close();
} catch (PDOException $e) {
    echo json_encode(array('success' => false, 'error' => $e->getMessage()));
}
