module.exports = `CREATE TABLE hotel (
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
);`;
