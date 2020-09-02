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
tematica varchar(30),
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