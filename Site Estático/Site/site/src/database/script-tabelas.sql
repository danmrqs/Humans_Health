drop database if exists humanshealth;

create database humanshealth;
use humanshealth;

create table guia ( 
idGuia int primary key,
nomeGuia varchar(45),
descricaoGuia varchar(150)
);

create table cadastro (
idUsuario int primary key auto_increment,
nome varchar(45),
telefone char(11),
email varchar(200),
senha varchar(50),
confirmacao varchar (50),
fkGuia int,
foreign key (fkGuia) references guia(idGuia)
);

create table aviso ( 
idAviso int primary key auto_increment,
titulo varchar (60),
descricao varchar (500),
fk_usuario int,
foreign key (fk_usuario) references cadastro(idUsuario)
);

create view vw_guia as select idGuia, nomeGuia, descricaoGuia from guia;

create view vw_cadastro as select idUsuario, nome, telefone, email, senha, fkGuia from cadastro;
