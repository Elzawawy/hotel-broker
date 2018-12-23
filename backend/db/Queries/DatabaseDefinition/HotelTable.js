module.exports = `CREATE TABLE Hotel (
    Name varchar(255) NOT NULL,
    Branch varchar(255) NOT NULL,
    Location varchar(255) NOT NULL,
    Images LONGBLOB DEFAULT NULL,
    BrokerUser varchar(255) DEFAULT NULL,
    OwnerUser varchar(255) NOT NULL,
    isSuspended boolean DEFAULT 0 NOT NULL,
    isPremium boolean DEFAULT 0 NOT NULL,
    isApproved boolean DEFAULT 0 NOT NULL,
    isDeleted boolean DEFAULT 0 NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT FK_BROKER FOREIGN KEY (BrokerUser) REFERENCES User(Username),
    CONSTRAINT FK_OWNER FOREIGN KEY (OwnerUser) REFERENCES User(Username),
    CONSTRAINT PK_HOTEL PRIMARY KEY (Name,Branch)
);`;
