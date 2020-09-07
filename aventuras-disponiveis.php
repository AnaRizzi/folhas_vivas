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

            if ($_SESSION['STATUS'] == 2){
                //consulta para a criança
                $consulta = $cn->query("select * from livro where categoria='Literatura infantojuvenil'");
            }
            else{
                //consulta de tudo para o adulto
                $consulta = $cn->query("select * from livro");
            }
		
    ?>

    <div class="quadro-branco">
      <div class="barra de busca">
          <img src="images/ico_aventuras diponiveis.png" id="avent-dispon">
          <img src="images/busca.png" id="barra-busca">
          <span id="buscar-avent">Aventuras disponíveis</span>
      </div>

      <div class="items-menu">

        <?php while($exibe = $consulta->fetch(PDO::FETCH_ASSOC)){ ?>

            <a href="detalhes.php?cd=<?php echo $exibe['id']; ?>" >
                <img class= "item_capa" src="img/<?php echo $exibe['capa']; ?>">
            </a>

        <?php } ?>

      </div>
    </div>      

    <footer>
        <a href="portal.php"><img src="images/voltar.png" id="voltar"></a>
        <a href="configuracoes.php"><img src="images/placa_configuracoes.png" id="placa" > </a>
        <img src="images/grama.png" id="grama">
    </footer>

    <?php } ?>

</body>
</html>