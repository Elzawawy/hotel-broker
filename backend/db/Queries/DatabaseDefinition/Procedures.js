exports.checkRole = `CREATE PROCEDURE check_role ( IN owner_user varchar(255), IN broker_user varchar(255)) 
                    BEGIN 
                    DECLARE countdata,countdata2 INT; 
                    SELECT COUNT(1) INTO countdata FROM User 
                    WHERE Username = broker_user and Role = 'Broker'; 
                    SELECT COUNT(1) INTO countdata2 FROM User 
                    WHERE Username = owner_user and Role = 'Owner'; 
                    IF ( broker_user != NULL && countdata = 0) 
                    THEN 
                    SIGNAL SQLSTATE '45000'
                    SET MESSAGE_TEXT = 'Check Constraint on BrokerUser failed'; 
                    END IF; 
                    IF ( countdata2 = 0) 
                    THEN  
                    SIGNAL SQLSTATE '45000' 
                    SET MESSAGE_TEXT = 'Check Constraint on OwnerUser failed'; 
                    END IF; 
                    END;`;
