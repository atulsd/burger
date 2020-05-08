     create database burgers_db;
     use burgers_db;

     create table burgers(
       id int(11) not null auto_increment,
       burger_name varchar(255) not null,
       devoured boolean,
       primary key(id)
     );