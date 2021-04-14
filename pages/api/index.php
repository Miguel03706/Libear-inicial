<?php
require_once "conexao.php";

$query =  "SELECT * FROM usuario ";
$executar = mysqli_query($conexao, $query);
$dados = mysqli_fetch_array($executar);
$json_data = json_encode($dados);



file_put_contents('json.json', $json_data);

