CREATE DATABASE dairyfarm;

USER dairyfam;


CREATE TABLE cows(
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(40),
  description VARCHAR(100),
  PRIMARY KEY (id)

);