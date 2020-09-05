<?php

include 'conexao.php';

$cpfmask = $_POST['txtcpfcri'];
$nome = $_POST['txtnomecri'];
$nascimentomask = $_POST['txtnascimentocri'];
$serie = $_POST['txtserie'];
$usuario = $_POST['txtusuariocri'];
$senha = $_POST['txtsenhacri'];
$avatar = null;

$cpfcorte1 = str_replace('.', '', $cpfmask);
$cpf = str_replace('-', '', $cpfcorte1);
$nascimento = implode('-', array_reverse(explode('/', $nascimentomask)));

$consultacpf = $cn->query("select cpf from usuario_responsavel where cpf='$cpf'");
$consultausuario = $cn->query("select usuario from login where usuario='$usuario'");

if($consultacpf->rowCount() != 1){
	header('location:errocpfresp.php');
}

else if($consultausuario->rowCount() == 1){
	header('location:errousuario.php');
}
else{
$consultaid = $cn->query("select id from usuario_responsavel where cpf='$cpf'");
$id = $consultaid->fetch(PDO::FETCH_ASSOC);
$idresp = $id['id'];

$incluir = $cn->query("call cadastro_crianca('$nome', '$nascimento', '$serie', '$avatar', '$idresp', '$usuario', '$senha')");
	header('location:confirmacao.php');

}


?>