<?php

	$servidor = "Localhost";
	$usuario = "folhas";
	$senha = "1234567";
	$banco = "folhas_vivas";

	//variável de conexão:
	$cn = new PDO("mysql:host=$servidor;dbname=$banco", $usuario, $senha);
	
?>