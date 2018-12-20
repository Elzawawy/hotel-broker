exports.RoleBeforeInsertTrigger = `CREATE TRIGGER hotel_before_insert2 BEFORE INSERT ON Hotel 
                                   FOR EACH ROW 
                                   BEGIN 
                                   CALL check_role (NEW.OwnerUser,NEW.BrokerUser); 
                                   END`;

exports.RoleBeforeUpdateTrigger = `CREATE TRIGGER hotel_before_update2 BEFORE UPDATE ON Hotel 
                                   FOR EACH ROW 
                                   BEGIN 
                                   CALL check_role (NEW.OwnerUser,NEW.BrokerUser); 
                                   END`;
