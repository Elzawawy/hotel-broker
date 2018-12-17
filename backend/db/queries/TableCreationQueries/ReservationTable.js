module.exports = `CREATE TABLE reservation(
    res_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    start_date date NOT NULL,
    end_date date NOT NULL,
    check_in boolean NOT NULL DEFAULT 0,
    check_out boolean NOT NULL DEFAULT 0
);`;
