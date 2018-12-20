exports.RoleBeforeInsertTrigger = `DELIMITER $$
                                   CREATE TRIGGER hotel_before_insert BEFORE INSERT ON Hotel
                                   FOR EACH ROW
                                   BEGIN
                                        CALL role_check(NEW.OwnerUser,NEW.BrokerUser)
                                   END$$
                                   DELIMITER ;`;

exports.RoleBeforeUpdateTrigger = `DELIMITER $$
                                   CREATE TRIGGER hotel_before_update BEFORE UPDATE ON Hotel
                                   FOR EACH ROW
                                   BEGIN
                                        CALL role_check(NEW.OwnerUser,NEW.BrokerUser)
                                   END$$
                                   DELIMITER ;`;