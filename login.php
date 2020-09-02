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
			<h1>Tela de login</h1>

		<div class="row">
		
			<div class="col-sm-4 col-sm-offset-4">
				
				<!-- Formulário de login -->
				<form name="frmusuario" method="post" action="validausuario.php">
					<div class="form-group">
				
						<label for="email">Usuário</label>
						<input name="txtusuario" type="text" class="form-control" required id="usuario">
					</div>
				
					<div class="form-group">
					
							<label for="senha">Senha</label>
							<input name="txtsenha" type="password" class="form-control" required id="senha">
					</div>
				
					<button type="submit" class="btn btn-lg btn-default">						
						Entrar						
					</button>
					
					<a href="cadastro.php">
					<button type="button" class="btn btn-lg btn-link">
						Ainda não sou cadastrado						
					</button>
					</a>

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

</body>
</html>