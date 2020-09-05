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

		if ($_SESSION['STATUS'] == 1){
			//consulta para a criança
			$consulta = $cn->query("select * from livro where categoria='Literatura infantojuvenil'");
		}
		else{
			//consulta de tudo para o adulto
			$consulta = $cn->query("select * from livro");
		}
		
	?>


	<div class="container-fluid">
	<h1>Bem-vindo ao portal da Árvore!</h1>

		<div class="row">
			<?php while($exibe = $consulta->fetch(PDO::FETCH_ASSOC)){ ?>

				<div class="col-sm-3 col-lg-2">
					<div>
					<a href="detalhes.php?cd=<?php echo $exibe['id']; ?>" ><img src="img/<?php echo $exibe['capa']; ?>" class="img-responsive" style="width: 100%"></a>
					<h4><?php echo $exibe['nome']; ?></h4>
					
					<!--
					<div class="text-center">
						<a href="detalhes.php?cd=<?php echo $exibe['id']; ?>">
							<button class="btn btn-lg btn-block btn-default">
								<span class="glyphicon glyphicon-info-sign" style="color: cadetblue"> Detalhes</span>
							</button>
						</a>
					</div>
					-->
					</div>
				</div>

			<?php } ?>
			
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