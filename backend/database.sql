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
    isClassA boolean NOT NULL DEFAULT 0,
    isBlacklisted boolean NOT NULL DEFAULT 0,
    isDeleted boolean NOT NULL DEFAULT 0,
    blacklisted_at TIMESTAMP NULL DEFAULT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    role ENUM('Broker','Owner','Customer') NOT NULL
);

CREATE TABLE hotel (
    hotel_number INT NOT NULL,
    hotel_branch varchar(255) NOT NULL,
    location varchar(255) NOT NULL,
    images LONGBLOB NOT NULL,
    broker_user varchar(255) NOT NULL,
    owner_user varchar(255) NOT NULL,
    isSuspended boolean DEFAULT 0 NOT NULL,
    isPremium boolean DEFAULT 0 NOT NULL,
    FOREIGN KEY (broker_user) REFERENCES user(username),
    FOREIGN KEY (owner_user) REFERENCES user(username),
    CONSTRAINT PK_HOTEL PRIMARY KEY (hotel_number,hotel_branch)
);

CREATE TABLE room (
    room_number INT NOT NULL,
    hotel_branch varchar(255) NOT NULL,
    hotel_number INT NOT NULL,
    isBooked boolean DEFAULT 0 NOT NULL,
    type varchar(255) NOT NULL,
    price DECIMAL(4,2) NOT NULL,
    CONSTRAINT FK_ROOM_HOTEL FOREIGN KEY (hotel_number,hotel_branch) REFERENCES hotel(hotel_number,hotel_branch),
    CONSTRAINT PK_ROOM PRIMARY KEY (room_number,hotel_branch,hotel_number)
);

CREATE TABLE ratesRelation(
    rating float NOT NULL DEFAULT 0,
    hotel_number INT NOT NULL,
    hotel_branch varchar(255) NOT NULL,
    customer_user varchar(255) NOT NULL,
    FOREIGN KEY (hotel_branch) REFERENCES hotel(hotel_branch),
    FOREIGN KEY (hotel_number) REFERENCES hotel(hotel_number),
    CONSTRAINT PK_RATING PRIMARY KEY (hotel_number,hotel_branch,customer_user),
    CHECK (rating BETWEEN 0 AND 5)
);

CREATE TABLE reservation(
    res_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    start_date date,
    end_date date,
    checked_in boolean DEFAULT 0,
    checked_out boolean DEFAULT 0
);

CREATE TABLE reservation_relation(
    res_id INT NOT NULL PRIMARY KEY,
    customer_user varchar(255) NOT NULL,
    hotel_number INT NOT NULL,
    hotel_branch varchar(255) NOT NULL,
    FOREIGN KEY (customer_user) REFERENCES user(username),
    FOREIGN KEY (hotel_number) REFERENCES hotel(hotel_number),
    FOREIGN KEY (hotel_branch) REFERENCES hotel(hotel_branch)
);