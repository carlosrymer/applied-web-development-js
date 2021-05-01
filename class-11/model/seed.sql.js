create database car;
create table cars (
   id INT NOT NULL AUTO_INCREMENT,
   make VARCHAR(200) NOT NULL,
   model VARCHAR(200) NOT NULL,
   year VARCHAR(200) NOT NULL,
   color VARCHAR(200) NOT NULL,
   features VARCHAR(200) NOT NULL,
   PRIMARY KEY ( id )
);