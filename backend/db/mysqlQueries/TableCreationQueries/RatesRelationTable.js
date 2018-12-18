module.exports = `CREATE TABLE RatesRelation(
    Rating float NOT NULL DEFAULT 0,
    HotelName varchar(255) NOT NULL,
    HotelBranch varchar(255) NOT NULL,
    CustomerUser varchar(255) NOT NULL,
    isDeleted boolean DEFAULT 0 NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT FK_USER FOREIGN KEY (CustomerUser) REFERENCES User(Username),
    CONSTRAINT FK_HOTEL FOREIGN KEY (HotelName,HotelBranch) REFERENCES Hotel(HotelName,HotelBranch),
    CONSTRAINT PK_RATES PRIMARY KEY (HotelName,HotelBranch,CustomerUser),
    CHECK (rating BETWEEN 0 AND 5)
);`;
