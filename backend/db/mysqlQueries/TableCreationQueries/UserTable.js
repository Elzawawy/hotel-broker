module.exports = `CREATE TABLE user (
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
);`;
