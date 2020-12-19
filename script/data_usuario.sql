
USE TIENDA;

INSERT INTO roles (nombre) VALUES ("Administrador");

INSERT INTO usuarios (roles_id, email, password, nombres, apellidos, estado) 
       VALUES (1,'usuario01@tecsup.edu.pe','nose','usuario01','Tecsup',1 );
       