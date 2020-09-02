<?php
	include 'conexao.php';

	session_start();

	$Vusuario = $_POST['txtusuario'];
	$Vsenha = $_POST['txtsenha'];

	$consulta = $cn->query("select usuario, senha, nivel_acesso, id_resp, nome_resp, id_cri, nome_cri from login_completo where usuario = '$Vusuario' and senha = '$Vsenha'");

	if($consulta->rowCount() == 1){
		//Usuário cadastrado;
		$exibeUsuario = $consulta->fetch(PDO::FETCH_ASSOC); //transforma a consulta em um array

		if($exibeUsuario['nivel_acesso'] == 'responsavel gratis'){
			$_SESSION['ID'] = $exibeUsuario['id_resp'];
			$_SESSION['STATUS'] = 0;
			$_SESSION['NOME'] = $exibeUsuario['nome_resp'];
			header('location:portal.php');			
		}
		else if ($exibeUsuario['nivel_acesso'] == 'crianca gratis'){
			$_SESSION['ID'] = $exibeUsuario['id_cri'];
			$_SESSION['STATUS'] = 1;
			$_SESSION['NOME'] = $exibeUsuario['nome_cri'];
			header('location:portal.php');
		}
		else{
			$_SESSION['ID'] = $exibeUsuario['id_resp'];
			$_SESSION['STATUS'] = 2;
			$_SESSION['NOME'] = 'Outro usuário';
			header('location:portal.php');
		}

	}

	
	else{
		header('location:erro.php');
	}
?>