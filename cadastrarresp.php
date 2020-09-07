<?php

include 'conexao.php';

$nome = $_POST['txtnome'];
$email = $_POST['txtemail'];
$nascimentomask = $_POST['txtnascimento'];
$cpfmask = $_POST['txtcpf'];
$usuario = $_POST['txtusuario'];
$senha = $_POST['txtsenha'];

$cpfcorte1 = str_replace('.', '', $cpfmask);
$cpf = str_replace('-', '', $cpfcorte1);
$nascimento = implode('-', array_reverse(explode('/', $nascimentomask)));

$consultacpf = $cn->query("select cpf from usuario_responsavel where cpf='$cpf'");
$consultaemail = $cn->query("select email from usuario_responsavel where email='$email'");
$consultausuario = $cn->query("select usuario from login where usuario='$usuario'");

if($consultacpf->rowCount() == 1){
	header('location:errocpf.html');
}

else if($consultaemail->rowCount() == 1){
	header('location:erroemail.html');
}

else if($consultausuario->rowCount() == 1){
	header('location:errousuario.html');
}
else{
	$incluir = $cn->query("call cadastro_resp('$nome', '$nascimento', '$cpf', '$email', '$usuario', '$senha')");
	header('location:cadastro-crianca.html');

}


?>