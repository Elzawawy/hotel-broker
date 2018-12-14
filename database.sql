CREATE DATABASE hotel_reservation;

CREATE TABLE user (
    username varchar(255) NOT NULL PRIMARY KEY,
    email varchar(255) UNIQUE NOT NULL,
    name varchar(255) NOT NULL,
    user_password varchar(255) NOT NULL,
    birthdate date NOT NULL,
    address varchar(255) NOT NULL,
    class bit DEFAULT 0,
    black_listed bit DEFAULT 0,
    role ENUM('Broker','Owner','Customer') NOT NULL
);

CREATE TABLE hotel(
    hotel_number INT NOT NULL,
    hotel_branch varchar(255) NOT NULL,
    location varchar(255) NOT NULL,
    image LONGBLOLB NOT NULL,
    stars INT,
    rating TEXT DEFAULT '',
    broker_user varchar(255),
    owner_user varchar(255),
    suspended bit DEFAULT 0,
    CONSTRAINT PK_HOTEL PRIMARY KEY (hotel_number,hotel_branch),
    FOREIGN KEY (broker_user) REFERENCES user(username),
    FOREIGN KEY (owner_user) REFERENCES user(username)
);

CREATE TABLE room(
    room_number INT NOT NULL,
    hotel_branch varchar(255) NOT NULL,
    hotel_number INT NOT NULL,
    state bit DEFAULT 0,
    room_type varchar(255) NOT NULL,
    price float NOT NULL,
    CONSTRAINT PK_ROOM PRIMARY KEY (room_number,hotel_branch,hotel_number),
    FOREIGN KEY (hotel_branch) REFERENCES hotel(hotel_branch),
    FOREIGN KEY (hotel_number) REFERENCES hotel(hotel_number)
);

CREATE TABLE rating(
    
);