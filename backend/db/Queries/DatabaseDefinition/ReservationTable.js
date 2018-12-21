//Create the Reservation Table which has a coneptual meaning of "Request to a Reservation" named "Resevation" for shorts. 
module.exports = `CREATE TABLE Reservation(
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    StartDate date NOT NULL,
    EndDate date NOT NULL,
    isChecked_in boolean NOT NULL DEFAULT 0,
    isChecked_out boolean NOT NULL DEFAULT 0,
    isDeleted boolean NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`;
