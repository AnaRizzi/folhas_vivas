<div class="cabecalho">
        <div id="avatar">
            <nav>
                <img src="images/mico com circulo.png" id="mico-circulo">
                <img src="images/lapis com circulo.png" id="lapis-circulo">
            </nav>            
            <div id="local-nome">
                <span id="nome"> <?php echo mb_strimwidth($_SESSION['NOME'], 0, 14, '...') ?></span>
            </div>
            <div>
                <img src="images/local do nivel.png" id="local-nivel">
                <span id="nivel"> Nível 1</span>
                <img src="images/seta nivel.png" id="seta-nivel">
                <img src="images/fundo moeda.png" id="fundo-moeda">
                <span id="moedas"> 50</span>
            </div>         
               
            <div id="sair">
                <a href="sair.php">Sair</a>
            </div>
        </div>
 </div>