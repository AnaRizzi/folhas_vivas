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
			<div class="col-sm-4 col-sm-offset-4">
				
				<h2>Agora vamos cadastrar a criança!</h2>
				
				<form method="post" action="cadastrarcri.php" name="logon">
				
					<div class="form-group">				
						<label for="cpfcri">CPF do responsável</label>
						<input name="txtcpfcri" type="text" class="form-control" required id="cpfcri">
					</div>	

					<div class="form-group">				
						<label for="nomecri">Nome</label>
						<input name="txtnomecri" type="text" class="form-control" required id="nomecri">
					</div>				
											
					<div class="form-group">					
							<label for="nascimentocri">Data de Nascimento</label>
							<input name="txtnascimentocri" type="text" class="form-control" required id="nascimentocri"></input>
					</div>						
						
					<div class="form-group">					
							<label for="serie">Série</label>
							<select name="txtserie" id="serie">
							  <option value="ano 1">1º ano</option>
							  <option value="ano 2">2º ano</option>
							  <option value="ano 3">3º ano</option>
							  <option value="ano 4">4º ano</option>
							  <option value="ano 5">5º ano</option>
							  <option value="ano 6">6º ano</option>
							  <option value="ano 7">7º ano</option>
							  <option value="ano 8">8º ano</option>
							  <option value="ano 9">9º ano</option>
							  <option value="outro">outro</option>

							</select>
					</div>
						
					<div class="form-group">
							<label for="usuariocri">Nome de usuário</label>
							<input name="txtusuariocri" type="text" class="form-control" required id="usuariocri">
					</div>

					<div class="form-group">
							<label for="senhacri">Senha</label>
							<input name="txtsenhacri" type="password" class="form-control" required id="senhacri">
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
		    $("#cpfcri").mask("000.000.000-00");
   		    $("#nascimentocri").mask("00/00/0000");

		});			
	
	</script>


</body>
</html>