<! DOCTYPE HTML>
<html lang="pt-br">
<head>
	<title>Folhas Vivas</title>
	<meta charset="utf-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Bootstrap -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

</head>
<body>
	<?php
		session_start();
		include 'conexao.php';
		include 'menu.php';
	?>


<div class="container-fluid">
		<div class="row">
			<h1>Cadastre-se</h1>
			<div class="col-sm-4 col-sm-offset-4">
				
				<h2>Vamos começar com os dados do responsável</h2>
				
				<form method="post" action="cadastrarresp.php" name="logon">
				
					<div class="form-group">				
						<label for="nome">Nome</label>
						<input name="txtnome" type="text" class="form-control" required id="nome">
					</div>				
				
					
					<div class="form-group">					
							<label for="email">E-mail</label>
							<input name="txtemail" type="email" class="form-control" required id="email">
					</div>
											
					<div class="form-group">					
							<label for="nascimento">Data de Nascimento</label>
							<input name="txtnascimento" type="text" class="form-control" required id="nascimento"></input>
					</div>
						
						
					<div class="form-group">					
							<label for="cpf">CPF</label>
							<input name="txtcpf" type="text" class="form-control" required id="cpf">
					</div>
						
					<div class="form-group">
							<label for="usuario">Nome de usuário</label>
							<input name="txtusuario" type="text" class="form-control" required id="usuario">
					</div>

					<div class="form-group">
							<label for="senha">Senha</label>
							<input name="txtsenha" type="password" class="form-control" required id="senha">
					</div>
								
					<button type="submit" class="btn btn-lg btn-default">
						<span class="glyphicon glyphicon-pencil"> Cadastrar</span>	
					</button>
				
				</form>
							
			</div>
		</div>
	</div>


	<?php
		include 'rodape.html';
	?>


	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
	<script src="jquery.mask.js"></script>

	<script>
	
		$(document).ready(function(){
		    $("#cpf").mask("000.000.000-00");
   		    $("#nascimento").mask("00/00/0000");

		});			
	
	</script>


</body>
</html>