<?php

$ocorrencia = array();

$ocorrencia['atividade'] = $_POST['atividade'];
$ocorrencia['finalidade'] = $_POST['finalidade'];
$ocorrencia['unidade'] = $_POST['unidade'];
$ocorrencia['data_saida'] = $_POST['data_saida'];
$ocorrencia['data_retorno'] = $_POST['data_retorno'];

$passageiros = array();

$nome = $_POST['nome'];
$telefone = $_POST['telefone'];

// Variável para testar a funcões de inserir vários passageiros
$passageiros = array(
   array ("Nome Test", "1234567"),
   array("$nome", "$telefone")
);
?>