CREATE DATABASE hotel_reservation;

CREATE TABLE user (
    username varchar(255) NOT NULL PRIMARY KEY,
    email varchar(255) UNIQUE NOT NULL,
    user_password varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    phone varchar(255) UNIQUE NOT NULL,
    ssn varchar(255) UNIQUE NOT NULL,
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
    broker_user varchar(255),
    owner_user varchar(255),
    suspended bit DEFAULT 0,
    premium bit DEFAULT 0,
    FOREIGN KEY (broker_user) REFERENCES user(username),
    FOREIGN KEY (owner_user) REFERENCES user(username),
    CONSTRAINT PK_HOTEL PRIMARY KEY (hotel_number,hotel_branch)
);

CREATE TABLE room(
    room_number INT NOT NULL,
    hotel_branch varchar(255) NOT NULL,
    hotel_number INT NOT NULL,
    state bit DEFAULT 0,
    room_type varchar(255) NOT NULL,
    price MONEY NOT NULL,
    FOREIGN KEY (hotel_branch) REFERENCES hotel(hotel_branch),
    FOREIGN KEY (hotel_number) REFERENCES hotel(hotel_number),
    CONSTRAINT PK_ROOM PRIMARY KEY (room_number,hotel_branch,hotel_number)
);

CREATE TABLE rating(
    rating float DEFAULT 0,
    hotel_number INT NOT NULL,
    hotel_branch varchar(255) NOT NULL,
    customer_user varchar(255) NOT NULL,
    FOREIGN KEY (hotel_branch) REFERENCES hotel(hotel_branch),
    FOREIGN KEY (hotel_number) REFERENCES hotel(hotel_number)
    CONSTRAINT PK_RATING PRIMARY KEY (hotel_number,hotel_branch),
    CHECK (rating BETWEEN 0 AND 5)
);

CREATE TABLE reservation(
    res_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    start_date date,
    end_date date,
    check_in bit DEFAULT 0,
    check_out bit DEFAULT 0
);

CREATE TABLE reservation_relation(
    customer_user varchar(255) NOT NULL,
    hotel_number INT NOT NULL,
    hotel_branch varchar(255) NOT NULL,
    res_id INT NOT NULL PRIMARY KEY,
    FOREIGN KEY (customer_user) REFERENCES user(username),
    FOREIGN KEY (hotel_number) REFERENCES hotel(hotel_number),
    FOREIGN KEY (hotel_branch) REFERENCES hotel(hotel_branch)
);