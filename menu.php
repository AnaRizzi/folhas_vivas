<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
      </li>


      <!-- Parte de código PHP para verificar qual item do menu deve ser exibido -->
      <?php if(empty($_SESSION['ID'])){ ?>
        <!-- botão que aparecerá quando não houver usuário logado -->
        <li class="nav-item">
          <a class="nav-link" href="login.php">Login</a>
        </li>

      <?php }
      else{ 
        $exibe_usuario = $_SESSION['NOME'];
        if ($_SESSION['STATUS'] == 0) {
      ?>

        <!-- Menu que aparecerá para o responsável -->
        <li class="nav-item">
          <a class="nav-link" href="#">Cadastrar criança</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ver atividades da criança</a>
        </li>
        <li class="nav-item">
          <!-- Exibir o nome de usuário com código PHP: -->
          <?php echo $exibe_usuario; ?>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sair.php">Sair</a>
        </li>

      <?php }
      else if ($_SESSION['STATUS'] == 1) {
        ?>
      <!-- Menu que aparecerá para a criança -->
        <li class="nav-item">
          <!-- Exibir o nome de usuário com código PHP: -->
          <?php echo 'avatar + '.$exibe_usuario; ?>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sair.php">Sair</a>
        </li>
      <?php } } ?>


      <!-- continuação do menu normal só com html -->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>

      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    
  </div>
</nav>