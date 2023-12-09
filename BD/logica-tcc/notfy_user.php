<?php

//parte do react
header("Access-Control-Allow-Origin: https://main--acpetshelper.netlify.app");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

include_once 'conexao.php';

// Recupera o timestamp da última verificação do cliente
$lastCheckTimestamp = isset($_GET['lastCheckTimestamp']) ? $_GET['lastCheckTimestamp'] : 0;

// Função para obter novos posts desde a última verificação
function getNewPosts($conn, $lastCheckTimestamp)
{
    $query = "SELECT * FROM posts WHERE creation_date > FROM_UNIXTIME($lastCheckTimestamp)";
    $result = $conn->query($query);

    $newPosts = [];

    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $newPosts[] = $row;
        }
    }

    return $newPosts;
}

// Chama a função para obter novos posts
$newPosts = getNewPosts($conn, $lastCheckTimestamp);

// Retorna a resposta como JSON
header('Content-Type: application/json');
echo json_encode(['hasNewPosts' => !empty($newPosts), 'newPosts' => $newPosts]);

// Fecha a conexão com o banco de dados
$conn->close();
