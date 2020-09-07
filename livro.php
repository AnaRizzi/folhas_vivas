<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Folhas Vivas - Login</title>
    <link rel="stylesheet" type="text/css" href="style-login.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="style-inicial-crianca.css" media="screen" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" rel="stylesheet">
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

    <div class="folhas-cantos-top">
        <img src="images/folhas.png" class="folha-e">
        <img src="images/folhas2.png" class="folha-d">
    </div>

    <div class="quadro-branco margem_top container_livro">

        <iframe id="iframe" class="ler_livro" src="livro_dino/capa.html" title="O dinossauro verde com penas"></iframe>

            <div class="seta-esquerda">
                <img onclick="mudarPagina('menos')" src="images/seta e.png" id="setaE">
            </div>
            
        <div class="seta-direita">
                <img onclick="mudarPagina('mais')" src="images/seta d.png" id="setaD">
        </div>
        
    </div>

    
    <footer>
        <a href="detalhes.php"><img src="images/voltar.png" id="voltar"></a>
        <a href="configuracoes.php"><img src="images/placa_configuracoes.png" id="placa" > </a>
        <img src="images/grama.png" id="grama">
    </footer>

    <?php } ?>

    <script>
        let paginaAtual = 1
        const pag1 = 'livro_dino/capa.html';
        const pag2 = 'livro_dino/pag02.html';
        const pag3 = 'livro_dino/pag03.html';
        const pag4 = 'livro_dino/pag04.html';
        const pag5 = 'livro_dino/pag05.html';
        const pag6 = 'livro_dino/pag06.html';
        const pag7 = 'livro_dino/pag07.html';

        function mudarPagina(pag){
            if (pag == 'mais'){
                if (paginaAtual < 7){
                    paginaAtual++;
                    recarregar();
                }  
            }
            else{
                if (paginaAtual > 1){
                    paginaAtual--;
                    recarregar();
                } 
            }            
        }

        function recarregar(){
            let iframeLivro = document.getElementById('iframe');
            switch (paginaAtual){
                case 1:
                    iframeLivro.src = pag1;
                    break;
                case 2:
                    iframeLivro.src = pag2;
                    break;
                case 3:
                    iframeLivro.src = pag3;
                    break;
                case 4:
                    iframeLivro.src = pag4;
                    break;
                case 5:
                    iframeLivro.src = pag5;
                    break;
                case 6:
                    iframeLivro.src = pag6;
                    break;
                case 7:
                    iframeLivro.src = pag7;
                    break;
            }
        }
        </script>
</body>

</html>