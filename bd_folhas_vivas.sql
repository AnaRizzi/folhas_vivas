create database folhas_vivas
use folhas_vivas

create table usuario_responsavel(
id int primary key auto_increment,
nome varchar(60) not null,
nascimento datetime not null,
cpf varchar(20) unique,
email varchar(60),
id_login int,
data_cadastro datetime,
foreign key (id_login) references login (id)
)

create table usuario_crianca(
id int primary key auto_increment,
nome varchar(60) not null,
nascimento datetime not null,
serie varchar(30),
avatar varchar(10),
pontos_ranking int,
id_responsavel int,
id_login int,
foreign key (id_login) references login (id)
)

create table login(
id int primary key auto_increment,
usuario varchar(50) not null unique,
senha varchar(50) not null,
nivel_acesso varchar(20) not null
)

create table livro(
id int primary key auto_increment,
nome varchar(100) not null,
autor varchar(60) not null,
editora varchar(60) not null,
edicao varchar(20),
descricao varchar(500) not null,
capa varchar(200),
conteudo varchar(200),
tipo_leitor varchar(30),
idioma varchar(20),
categoria varchar(30),
tematica varchar(100),
serie_indicada varchar(20)
)

create table livro_favorito(
id_crianca int,
id_livro int,
primary key (id_crianca, id_livro),
foreign key (id_crianca) references usuario_crianca (id),
foreign key (id_livro) references livro (id)
)

create view login_completo as
select l.usuario, l.senha, l.nivel_acesso, r.id id_resp, r.nome nome_resp, c.id id_cri, c.nome nome_cri
	from login l
    left join usuario_responsavel r on l.id = r.id_login
    left join usuario_crianca c on l.id = c.id_login

select usuario, senha, nivel_acesso, id_resp, nome_resp, id_cri, nome_cri from  login_completo

DELIMITER $$
create procedure cadastro_resp(
in nome_r varchar(60),
in data_nascimento datetime,
in cpf_r varchar(20),
in email_r varchar(60),
in usu varchar(50),
in sen varchar(50)
)
begin
	insert into login (usuario, senha, nivel_acesso) values
		(usu, sen, "responsavel gratis");
	set @id_gerado = (select id from login where usuario = usu);
	insert into usuario_responsavel (nome, nascimento, cpf, email, id_login, data_cadastro) values
		(nome_r, data_nascimento, cpf_r, email_r, @id_gerado, curdate( ));
end $$
DELIMITER ;	


DELIMITER $$
create procedure cadastro_crianca(
in nome_c varchar(60),
in data_nasc datetime,
in ser varchar(30),
in avat varchar(10),
in id_resp int,
in usu varchar(50),
in sen varchar(50)
)
begin
	insert into login (usuario, senha, nivel_acesso) values
		(usu, sen, "crianca gratis");
	set @id_gerado = (select id from login where usuario = usu);
	insert into usuario_crianca (nome, nascimento, serie, avatar, pontos_ranking, id_responsavel, id_login) values
		(nome_c, data_nasc, ser, avat, 0, id_resp, @id_gerado);
end $$
DELIMITER ;	

call cadastro_resp('Ana', '1988-06-03', '12312312312', 'ana@ana.com', 'anarizzi', '1234567');

call cadastro_crianca('Aquiles', '2020-03-30', '1', null, 1, 'Aquiles', '1234567');


select * from login

select * from usuario_responsavel

select * from usuario_crianca
 
-- criar novo usuário
CREATE USER 'folhas'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234567';

-- dar permissão a esse usuário a mexer no banco db_ead
GRANT ALL PRIVILEGES ON folhas_vivas.* TO 'folhas'@'localhost' WITH GRANT OPTION;


insert into livro(nome, autor, editora, edicao, descricao, capa, tipo_leitor, idioma, categoria, tematica, serie_indicada) values
	('O dinossauro verde com penas', 'Marcela Souza', 'Independente', '1', 'Um dinossauro gosta de assustar os amigos pela floresta, até que um dia algo inesperado acontece com ele.', 'dino.jpg', 'Autônomo', 'Português', 'Literatura infantojuvenil', 'Amizade', '1 2 3 4 5'),
	('O Médico e o Monstro', 'Robert Louis Stevenson', 'Melhoramentos', '1', 'Na efervescente Londres do século XIX, qual seria a relação secreta entre Dr. Henry Jekyll, um médico bem-sucedido, generoso, elegante e educado, e Mr. Hyde, um homem repugnante e assustador?', 'medico.jpg', 'Experiente', 'Português', 'Literatura terror', 'Terror', null),
	('Chapeuzinho vermelho', 'Sonia Junqueira', 'Autêntica ', '1', 'Chapeuzinho Vermelho, um conto que o mundo inteiro conhece mas que ganha uma cara e um jeito novo, cheio de humor, recontado com sotaque brasileiro.', 'chapeuzinho.jpg', 'Autônomo', 'Português', 'Literatura infantojuvenil', 'Folclore', '2 3 4 5'),
    ('Tatu-balão', 'Sônia Barros', 'Aletria', '1', 'Conheça a história desse tatu-bola que sonhava em ser balão. Determinado, o tatu subia todos os dias no alto de uma montanha e se lançava desejando finalmente tornar-se tatu-balão. Será que ele conseguirá realizar seu sonho? ', 'tatu.jpg', 'Autônomo', 'Português', 'Literatura infantojuvenil', 'Animal Bichos Floresta', '1 2 3'),
    ('Como as democracias morrem', 'Steven Levitsky', 'Zahar', '1', 'Uma análise crua e perturbadora do fim das democracias em todo o mundo Democracias tradicionais entram em colapso? Essa é a questão que Steven Levitsky e Daniel Ziblatt – dois conceituados professores de Harvard – respondem ao discutir o modo como a eleição de Donald Trump se tornou possível.', 'democracia.jpg', 'Experiente', 'Português', 'Ciências políticas', 'Política Histórico Brasila', null),
    ('O pequeno príncipe', 'Antoine de Saint-Exupéry', 'Autêntica', '1', 'Há mais de 70 anos encantando gerações de leitores de todas as idades, O Pequeno Príncipe sai agora pela Autêntica, em tradução que buscou uma linguagem – tanto verbal quanto visual – mais próxima do leitor brasileiro de nossos dias.', 'principe.jpg', 'Autônomo', 'Português', 'Literatura infantojuvenil', 'Amizade Aprendizado Amor', '4 5 6 7 8 9'),
    ('O menino que queria virar vento', 'Pedro Kalil Auad', 'Aletria', '1', 'O que pode fazer uma criança quando bate em seu peito a saudade? Fruto de parceria afinada entre autor e ilustradora, O menino que queria virar vento prova que para transpor longas distâncias entre pessoas que se amam é possível recorrer à imaginação e à sensibilidade.', 'vento.jpg', 'Autônomo', 'Português', 'Literatura infantojuvenil', 'Amizade', '4 5 6'),
	('O diário de Anne Frank em quadrinhos', 'Anne Frank', 'Nemo', '1', 'Em 1942, Anne Frank, uma garota judia de apenas 13 anos, é forçada a se esconder com a família diante das constantes ameaças dos nazistas. Em seu diário, ela narra a própria história, privada do mundo exterior, enquanto sonha em ter sua liberdade de volta.', 'anne.jpg', 'Autônomo', 'Português', 'Literatura quadrinhos', 'Fato histórico', null),
	('Minha história', 'Michelle Obama', 'Objetiva', '1', 'Um relato íntimo, poderoso e inspirador da ex-primeira-dama dos Estados Unidos. O livro que já vendeu mais de 10 milhões de exemplares no mundo e está há mais de 16 semanas na lista de mais vendidos da Veja.', 'obama.jpg', 'Autônomo', 'Português', 'Biografias e autobiografias', 'Vida Memória Política', null),
    ('Não sou mais bebê', 'Ilan Brenman', 'Aletria', '1', 'Alice não quer ajuda de ninguém, ela não é mais bebê! Já sabe fazer quase tudo sozinha: escovar os dentes, tomar banho, trocar de roupa, comer sem se sujar, fazer as atividades na escola...', 'bebe.jpg', 'Iniciante', 'Português', 'Literatura infantojuvenil', 'Infância Criança', '1'),
    ('O menino que perdia as palavras', 'Lau Furquim', 'Bamboozinho', '1', 'Você já percebeu como as palavras são importantes pra gente? São elas que nos ajudam a compreender e a comunicar tudo o que percebemos, pensamos e sentimos. Este livro conta a história do Cazé, um menino que adora falar! ', 'palavras.jpg', 'Autônomo', 'Português', 'Literatura infantojuvenil', 'Livro/Leitura Comunicação', '3 4 5'),
    ('Uma ideia toda azul', 'Marina Colasanti', 'Global', '1', 'Em Uma Ideia Toda Azul, reis, rainhas, princesas, príncipes, unicórnios, gnomos, cisnes, fadas são alguns dos personagens dos dez contos, criados pela sensibilidade e imaginação de Marina Colasanti.', 'azul.jpg', 'Autônomo', 'Português', 'Literatura infantojuvenil', 'Amor Fantaia Conto', '4 5 6'),
	('A caixa de Pandora', 'Eliana Sá', 'Sá Editora', '1', 'A história da menina Pandora que, sem querer, abre uma caixa e deixa sair todos os males do mundo, que até então ela não conhecera. A caixa fora um presente de Zeus, querendo se vingar de uma travessura, o roubo do Fogo pelo Homens.', 'pandora.jpg', 'Autônomo', 'Português', 'Literatura infantojuvenil', 'Aprendizado', '5 6 7'),
	('A Mula Sem Cabeça', 'Marion Villas Boas', 'Rovelle', '1', 'Historietas divertidas que blá-blá-bleiam de verdade, como as crianças fazem no dia a dia. As narrativas em versos resgatam a oralidade da infância e brincam com as palavras', 'mula.jpg', 'Autônomo', 'Português', 'Literatura infantojuvenil', 'Folclore', '3 4 5'),
    ('Céu de fundo do mar e outras memórias', 'Janaína Michalski', 'Autêntica', '1', 'Não simplesmente por causa das laranjeiras enfileiradas dos dois lados da rua principal. Nem apenas pelo sempre perfume de laranja madura. ', 'ceu.jpg', 'Autônomo', 'Português', 'Literatura infantojuvenil', 'Memória', '5 6 7 8'),    
    ('Dor de garganta', 'Ana Letícia Leal', 'Garamond', '1', 'Janaína, uma jovem jornalista, decide investigar um crime de preconceito racial que acabou em violência e agressão. A principal vítima foi Edu, um garoto que devido ao caso foi parar no hospital.', 'garganta.jpg', 'Autônomo', 'Português', 'Literatura infantojuvenil', 'Negritude Relevância social', '4 5 6'),
    ('Quem conta um conto aumenta um ponto', 'Bel Assunção Azevedo', 'Autêntica', '1', 'Os ditados ou ditos populares, também conhecidos como provérbios, são sentenças que sintetizam e propagam a sabedoria de um povo. Por vezes engraçados, maliciosos ou chistosos, por outras místicos ou doutrinários e exemplares, uns se valendo de linguagem metafórica, outros bastante concretos e literais, todos representam uma moral popular baseada no senso comum e fazem parte de um acervo maior, que pode ser chamado de tradição oral. ', 'ponto.jpg', 'Autônomo', 'Português', 'Literatura infantojuvenil', 'Tradição oral Cultura', '3 4 5 6'),
	('O menino maluquinho', 'Ziraldo', 'Melhoramentos', '1', 'Na grande obra infantil de Ziraldo, verso e desenho contam a história de um menino traquinas que aprontava muita confusão. Alegria da casa, liderava a garotada, era sabido e um amigão.', 'maluquinho.jpg', 'Autônomo', 'Português', 'Literatura infantojuvenil', 'Infância Amizade Aventuras Brincadeira', '4 5')

    select * from livro