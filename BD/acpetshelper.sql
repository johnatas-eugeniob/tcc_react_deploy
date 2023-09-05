DROP DATABASE if EXISTS ac_pets_helper;
CREATE DATABASE ac_pets_helper;
USE ac_pets_helper;
SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";  

 	
    START TRANSACTION;
		SET time_zone = "-03:00"; 

	    CREATE TABLE usuarios
	    (
	    id INT NOT NULL AUTO_INCREMENT,
	    nome VARCHAR (50) COLLATE utf8mb4_unicode_ci NOT NULL,
	    email VARCHAR (40) COLLATE utf8mb4_unicode_ci NOT NULL,
	    senha VARCHAR (20) COLLATE utf8mb4_unicode_ci NOT NULL,
	    dia_criacao DATE NOT NULL,
	    foto VARCHAR (100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
	    PRIMARY KEY(`id`)
	    ); 
    
    
    START TRANSACTION;
    
    	CREATE TABLE postagens
    	(
		id INT NOT NULL AUTO_INCREMENT,
		id_usu INT NOT NULL,
		titulo VARCHAR (30) COLLATE UTF8MB4_UNICODE_CI NOT NULL,
		data_cri DATE NOT NULL,
		PRIMARY KEY (`id`),
		FOREIGN KEY(`id_usu`) REFERENCES `usuarios` (`id`)
		);
	
	
	
	START TRANSACTION;
	
		CREATE TABLE subpostagens
    	(
    	id_text INT NOT NULL AUTO_INCREMENT,
    	id_post INT NOT NULL, 
		texto TEXT NOT NULL,
		imagens VARCHAR (100) NOT NULL,
		PRIMARY KEY (`id_text`),
		FOREIGN KEY(`id_post`) REFERENCES `postagens` (`id`)
		);
		

	START TRANSACTION;
	
		CREATE TABLE favoritos
		(
		id INT NOT NULL AUTO_INCREMENT,
		id_usu INT NOT NULL,
		id_post INT NOT NULL,
		PRIMARY KEY (`id`),
		FOREIGN KEY(`id_post`) REFERENCES `postagens` (`id`),
		FOREIGN KEY(`id_usu`) REFERENCES `usuarios` (`id`)
		);
		
	START TRANSACTION;
	
		CREATE TABLE salvos
		(
		id INT NOT NULL AUTO_INCREMENT,
		id_usu INT NOT NULL,
		id_post INT NOT NULL,
		data_salvo DATE NOT NULL,
		PRIMARY KEY (`id`),
		FOREIGN KEY(`id_post`) REFERENCES `postagens` (`id`),
		FOREIGN KEY(`id_usu`) REFERENCES `usuarios` (`id`)
		);
		
	START TRANSACTION;
	
		CREATE TABLE doações
		(
		id INT NOT NULL AUTO_INCREMENT,
		id_usu INT NOT NULL,
		id_post INT NOT NULL,
		valor INT NOT NULL,
		data_don DATE NOT NULL,
		PRIMARY KEY (`id`),
		FOREIGN KEY(`id_post`) REFERENCES `postagens` (`id`),
		FOREIGN KEY(`id_usu`) REFERENCES `usuarios` (`id`)
		);
		
