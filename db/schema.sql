-- DROP DATABASE
DROP DATABASE IF EXISTS grrrrinder_db;

-- CREATE DATABASE --
CREATE DATABASE grrrrinder_db;

USE grrrrinder_db;

CREATE TABLE owner (
    id INT auto_increment NOT NULL, 
    owner_first_name VARCHAR(30) NOT NULL,
    owner_last_name VARCHAR (30), --leave this as optional
    owner_location VARCHAR(30) NOT NULL, --just ask for zip code here
    username VARCHAR (30) NOT NULL, --email address
    password VARCHAR(30) NOT NULL, --enrypted 
    PRIMARY KEY (id)
);

CREATE TABLE dog (
    id INT auto_increment NOT NULL,
    dog_name VARCHAR(30) NOT NULL,
    dog_breed VARCHAR(30) NOT NULL,
    dog_gender VARCHAR(10) NOT NULL, -- male, female
    dog_size VARCHAR(20) NOT NULL, -- small, medium, large, extra large 
    dog_age DECIMAL NOT NUll, 
    dog_vaccinations VARCHAR(5) NOT NULL,--yes/no 
    dog_neuter_spayed VARCHAR(5) NOT NULL,--yes/no 
    dog_temperment VARCHAR(200) NOT NULL,
    dog_notes VARCHAR(200),
    dog_picture VARBINARY(max), --looking into Cloudinary
    PRIMARY KEY (id)
);

CREATE TABLE meetup (
    id INT auto_increment NOT NULL,
    preferred_dates DATE NOT NULL, -- list multiple selections 
    preferred_times VARCHAR (30), --time of day selection i.e. morning, afternoon, etc.
    preferred_location VARCHAR (30), --based on zip again
    PRIMARY KEY (id)
);


