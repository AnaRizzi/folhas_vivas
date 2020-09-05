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

        if(!empty($_GET['cd'])){
            $cd_livro = $_GET['cd'];
            $consulta = $cn->query("select * from livro where id = '$cd_livro'");
            $exibe = $consulta->fetch(PDO::FETCH_ASSOC);
        }
        else{
            header("location:index.php");
        }		
	?>


<div class="container-fluid">
	<div class="row">		
		 <div class="col-sm-4 col-sm-offset-1">			 
			 <img src="img/<?php echo $exibe['capa']; ?>" class="img-responsive" style="width:100%;">
		</div>
				
 		<div class="col-sm-7"><h1><?php echo $exibe['nome'] ?></h1>
		
		<p><b>Autor:</b> <?php echo $exibe['autor'] ?></p>
		<p><b>Editora:</b> <?php echo $exibe['editora'] ?></p>

		<p><?php echo $exibe['descricao'] ?></p>
		
		<p><b>Tipo de leitor:</b> <?php echo $exibe['tipo_leitor'] ?></p>
		<p><b>Idioma:</b> <?php echo $exibe['idioma'] ?></p>	 
        <p><b>Categoria:</b> <?php echo $exibe['categoria'] ?></p>
		<p><b>Temática:</b> <?php echo $exibe['tematica'] ?></p>	  
						
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