<?php
include("ocorrencia_model.php");
include("var_ocorrencia.php");

$id_passageiros = insertPassageiros($passageiros); // Função retorna IDs dos passageiros
insertOcorrencia($ocorrencia, $id_passageiros);    // Função insere ocorrencia com passageiros no banco
?>

