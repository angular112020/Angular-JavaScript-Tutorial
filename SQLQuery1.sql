create database chetuDB;
use chetuDB;
use master;

drop database chetuDB;

create table employees
(id int primary key,
name varchar(100),
email varchar(100),
mobile varchar(15),
dob date
);

sp_help employees;

alter table employees drop column id;
alter table employees add address varchar(max)

alter table employees drop column address;

alter table employees add address varchar(200)

sp_rename 'employees.name','emp_name'

drop table employees;

insert into  employees 
(id,emp_name,email,mobile,address)
values
(2,'raju','amit@gmail.com','93842344','noida'),
(3,'deepak','amit@gmail.com','93842344','noida'),
(4,'dev','amit@gmail.com','93842344','noida')


select* from employees where;







