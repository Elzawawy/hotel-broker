module.exports = `CREATE TABLE requestsRelation(
    res_id INT NOT NULL PRIMARY KEY,
    customer_user varchar(255) NOT NULL,
    hotel_number INT NOT NULL,
    hotel_branch varchar(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT FK_REQUESTS_RES FOREIGN KEY (res_id) REFERENCES reservation(res_id),
    CONSTRAINT FK_REQUESTS_USER FOREIGN KEY  (customer_user) REFERENCES user(username),
    CONSTRAINT FK_REQUESTS_HOTEL FOREIGN KEY (hotel_number,hotel_branch) REFERENCES hotel(hotel_number,hotel_branch)
);`;
