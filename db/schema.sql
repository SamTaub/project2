DROP DATABASE IF EXISTS toys_db;

CREATE DATABASE toys_db;
USE toys_db;

CREATE TABLE toys (
	id int NOT NULL AUTO_INCREMENT,
	head varchar(255) NOT NULL,
    body varchar(255) NOT NULL,
	legs varchar(255) NOT NULL,
    background varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
