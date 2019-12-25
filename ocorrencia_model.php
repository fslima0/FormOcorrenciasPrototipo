<?php
include("conexao.php");

function insertPassageiros($p) 
{
   $con = conecta();                      // Função que faz conexão com banco de dados
   $id_passageiros = array();             // Variável guarda IDs dos passageiros

   for ($i = 0; $i < count($p); $i++) {   // Laço que auxilia nas inserções dos passageiros no banco
      $nome = $p[$i][0];
      $telefone = $p[$i][1];

      $sql = "INSERT INTO Passageiro (nome, telefone)
                     VALUES ('$nome', '$telefone');";

      $insert = mysqli_query($con, $sql);
      $id_passageiros[$i] = mysqli_insert_id($con);
   }
   return $id_passageiros;
}

function insertOcorrencia($o, $id_passageiros) 
{
   $con = conecta();

   $finalidade = $o['finalidade'];
   $unidade = $o['unidade'];

   $sql = "INSERT INTO ocorrencia (atividade_id, finalidade, unidade, data_saida, data_retorno)
                  VALUES (1, '$finalidade', '$unidade', '2005-04-15 09:09:09', '2005-04-15 09:09:07');";
                  
   $insert = mysqli_query($con, $sql);       // Insere ocorrencia no banco de dados
   $id_ocorrencia = mysqli_insert_id($con);  // Variável guarda ID da ocorrência

   for ($i = 0; $i < count($id_passageiros); $i++) {
      $sql = "INSERT INTO ocorrencia_has_passageiro (ocorrencia_id, passageiro_id)
                     VALUES ('$id_ocorrencia', '$id_passageiros[$i]');";                 
      $insert = mysqli_query($con, $sql);
   }
}
?>