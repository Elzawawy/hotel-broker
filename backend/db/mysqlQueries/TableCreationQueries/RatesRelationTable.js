module.exports = `CREATE TABLE ratesRelation(
    rating float NOT NULL DEFAULT 0,
    hotel_number INT NOT NULL,
    hotel_branch varchar(255) NOT NULL,
    customer_user varchar(255) NOT NULL,
    CONSTRAINT FK_RATES_USER FOREIGN KEY (customer_user) REFERENCES user(username),
    CONSTRAINT FK_RATES_HOTEL FOREIGN KEY (hotel_number,hotel_branch) REFERENCES hotel(hotel_number,hotel_branch),
    CONSTRAINT PK_RATES PRIMARY KEY (hotel_number,hotel_branch,customer_user),
    CHECK (rating BETWEEN 0 AND 5)
);`;
