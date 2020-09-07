<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Folhas Vivas - Home</title>
    <link rel="stylesheet" type="text/css" href="style-inicial-crianca.css" media="screen" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <script type="text/javascript" src="cadastro-responsavel.js"></script>
</head>
<body class="body">

    <?php
		session_start();
		include 'conexao.php';

		if ($_SESSION['STATUS'] == null){
            header('location:login.html');
        		}
		else{		

            include 'cabecalho.php';

            if(!empty($_GET['cd'])){
                $cd_livro = $_GET['cd'];
                $consulta = $cn->query("select * from livro where id = '$cd_livro'");
                $exibe = $consulta->fetch(PDO::FETCH_ASSOC);
            }
            else{
                header("location:index.php");
            }		
    ?>

    <div class="quadro-branco">
      <div class="barra de busca">
          <img src="images/ico_aventuras diponiveis.png" id="avent-dispon">
          <img src="images/busca.png" id="barra-busca">
          <span id="buscar-avent">Aventuras disponíveis</span>
      </div>

      <div class="exibicaolivro">
        <img src="img/<?php echo $exibe['capa']; ?>" class="img-capa">  
        <div class="info_livro">
             <h2><?php echo $exibe['nome'] ?></h2>
             <br/>
		
            <p><b>Autor:</b> <?php echo $exibe['autor'] ?></p>
            <p><b>Editora:</b> <?php echo $exibe['editora'] ?></p>

            <p><?php echo $exibe['descricao'] ?></p>
            
            <p><b>Tipo de leitor:</b> <?php echo $exibe['tipo_leitor'] ?></p>
            <p><b>Idioma:</b> <?php echo $exibe['idioma'] ?></p>	 
            <p><b>Categoria:</b> <?php echo $exibe['categoria'] ?></p>
            <p><b>Temática:</b> <?php echo $exibe['tematica'] ?></p>	
        </div>	
        <br/>
        <a href="#"><button class="btn btn_ler">Ler agora</button></a>
      </div>
    </div>      

    <footer>
        <a href="javascript:history.back();"><img src="images/voltar.png" id="voltar"></a>
        <a href="configuracoes.php"><img src="images/placa_configuracoes.png" id="placa" > </a>
        <img src="images/grama.png" id="grama">
    </footer>

    <?php } ?>

</body>
</html>