create or replace function retornarclave(varchar) returns varchar
 as
   'select clave from usuarios where nombre=$1;'
 language sql;


create or replace function sumar(integer,integer) returns integer 
 AS 
   'select $1+$2;'
 language sql;



create or replace function cargarusuarios() returns void
as
$$
 insert into usuarios (nombre, clave) values ('Marcelo','Boca');
 insert into usuarios (nombre, clave) values ('JuanPerez','Juancito');
 insert into usuarios (nombre, clave) values ('Susana','River');
 insert into usuarios (nombre, clave) values ('Luis','River');
$$
 language sql;