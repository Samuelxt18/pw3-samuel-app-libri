create database bd_libri_api;

use bd_libri_api;

CREATE TABLE tbl_categoria(
	cod_categoria int unsigned auto_increment primary key,
    nome_categoria varchar(100) not null
);

INSERT INTO tbl_categoria (nome_categoria, createdAt, updatedAt) VALUES ('Ficção Científica', now(), now());
INSERT INTO tbl_categoria (nome_categoria, createdAt, updatedAt) VALUES ('Fantasia Heroica', now(), now());
INSERT INTO tbl_categoria (nome_categoria, createdAt, updatedAt) VALUES ('Romance', now(), now());
INSERT INTO tbl_categoria (nome_categoria, createdAt, updatedAt) VALUES ('Distopia', now(), now());
INSERT INTO tbl_categoria (nome_categoria, createdAt, updatedAt) VALUES ('Infantil', now(), now());
