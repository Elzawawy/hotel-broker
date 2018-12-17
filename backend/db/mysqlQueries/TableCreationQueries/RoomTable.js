module.exports = `CREATE TABLE room (
    room_number INT NOT NULL,
    hotel_branch varchar(255) NOT NULL,
    hotel_number INT NOT NULL,
    isBooked boolean DEFAULT 0 NOT NULL,
    type varchar(255) NOT NULL,
    price DECIMAL(4,2) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT FK_ROOM_HOTEL FOREIGN KEY (hotel_number,hotel_branch) REFERENCES hotel(hotel_number,hotel_branch),
    CONSTRAINT PK_ROOM PRIMARY KEY (room_number,hotel_branch,hotel_number)
);`;
