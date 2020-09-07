<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Folhas Vivas - Configurações</title>
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
    ?>
    
    <?php
    include 'cabecalho.php'
    ?>

    <div class="quadro-branco">
      <div class="barra de busca">
          <img src="images/ico_conf.png" id="config">
          <img src="images/busca.png" id="barra-busca">
          <span id="buscar-avent">Configurações</span>
      </div>
      <div class="barra de busca">
        <img src="images/busca.png" id="barra-busca2">
        <span id="buscar-config">Buscar nas configurações</span>
    </div>
      <div class="miolo">
          <img id="miolo-config" src="images/miolo-configuracoes.png">
      </div>
    </div>             
    <footer>
        <a href="javascript:history.back();"><img src="images/voltar.png" id="voltar"></a>
        <img src="images/placa_configuracoes.png" id="placa" >
        <img src="images/grama.png" id="grama">
    </footer>

    <?php } ?>

</body>
</html>