<?php
function conecta() 
{
    $servidor = "localhost";
    $usuario  = "root";
    $senha    = "dpe12345";
    $dbname   = "sactrans";

    $con = mysqli_connect($servidor, $usuario, $senha, $dbname);

    if (!con) {
        die("Não foi possível conectar ao bancos." . mysql_connect_error());
    }
    return $con;
}
?>
