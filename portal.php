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
    ?>
    
    <?php
    include 'cabecalho.php';

    if ($_SESSION['STATUS'] == 2){ 
    ?>
        <!-- página da criança -->
    <div class="quadro-branco">
      <div class="barra de busca">
          <img src="images/busca.png" id="barra-busca">
          <span id="buscar-avent">Buscar aventuras</span>
      </div>
      <div class="items-menu">
          <img class= "item" src="images/btn_aventuras_anteriores.png">
          <a href="aventuras-disponiveis.php"><img  class= "item" src="images/btn_aventuras_disponiveis.png"></a>
          <img  class= "item" src="images/btn_conquistas.png">
          <img  class= "item" src="images/btn_atividades.png">
          <img  class= "item" src="images/btn_ranking.png">
      </div>
    </div> 

    <?php
    }
    else{
    ?>
    <!-- página do adulto -->
    <div class="quadro-branco">
      <div class="barra de busca">
          <img src="images/busca.png" id="barra-busca">
          <span id="buscar-avent">Buscar livro</span>
      </div>
      <div class="items-menu-adulto">
          <div class="menuAdulto">
          <img class= "item itemPequeno" src="images/medalha verde.png">
          <span">
            Leituras em andamento
          </span>
            </div>

            <div class="menuAdulto">
            
          <img class= "item itemPequeno" src="images/medalha roxa.png">
          <a href="aventuras-disponiveis.php"><span >
            Livros disponíveis
          </span>
            </a>
            </div>

            <div class="menuAdulto">
          <img class= "item itemPequeno" src="images/medalha verde.png">
          <span >
            Ver atividades das crianças
          </span>
            </div>

      </div>
    </div> 

    <?php
    }
    ?>

                
    <footer>
        <a href="configuracoes.php"><img src="images/placa_configuracoes.png" id="placa"></a>
        <img src="images/grama.png" id="grama">
    </footer>

        <?php } ?>
</body>
</html>