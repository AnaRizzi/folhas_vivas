<div class="cabecalho">
    <?php
		include 'conexao.php';
        if ($_SESSION['STATUS'] == 2){
            //cabeçalho da criança criança
    ?>
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


        <?php }
        else{
            //cabeçalho do adulto
        ?>
            <div id="avatar">
            <nav>
                <img src="images/ico_conta.png" id="mico-circulo" >
                <img src="images/lapis com circulo.png" id="lapis-circulo">
            </nav>            
            <div id="local-nome">
                <span id="nome"> <?php echo mb_strimwidth($_SESSION['NOME'], 0, 14, '...') ?></span>
            </div>     
            <div id="sair">
                <span>Ver atividades da criança</span>
            </div>

            <div id="sair">
                <a href="sair.php">Sair</a>
            </div>
        </div>

        <?php } ?>
 </div>