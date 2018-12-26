exports.RoleBeforeInsertTrigger = `CREATE TRIGGER hotel_before_insert BEFORE INSERT ON Hotel 
                                   FOR EACH ROW 
                                   BEGIN 
                                   CALL check_role (NEW.OwnerUser,NEW.BrokerUser); 
                                   END;`;

exports.RoleBeforeUpdateTrigger = `CREATE TRIGGER hotel_before_update BEFORE UPDATE ON Hotel 
                                   FOR EACH ROW 
                                   BEGIN 
                                   CALL check_role (NEW.OwnerUser,NEW.BrokerUser); 
                                   END;`;

exports.TypeBeforeInsertTrigger = `CREATE TRIGGER reservation_before_insert BEFORE INSERT ON Reservation
                                  FOR EACH ROW 
                                  BEGIN
                                  CALL check_reservation_type(NEW.RoomNumber, NEW.HotelName, NEW.HotelBranch);
                                  END;`;

exports.TypeBeforeUpdateTrigger = `CREATE TRIGGER reservation_before_update BEFORE UPDATE ON Reservation
                                  FOR EACH ROW 
                                  BEGIN
                                  CALL check_reservation_type(NEW.RoomNumber, NEW.HotelName, NEW.HotelBranch);
                                  END;`;

exports.checkedOutBeforeInsertTrigger = `CREATE TRIGGER room_before_insert BEFORE INSERT ON Room
                                        FOR EACH ROW 
                                        BEGIN
                                        SET NEW.checkedOut = CURRENT_DATE;
                                        END;`;

exports.checkedOutBeforeUpdateTrigger =`CREATE TRIGGER room_before_update BEFORE UPDATE ON Room
                                        FOR EACH ROW 
                                        BEGIN
                                        SET NEW.checkedOut = CURRENT_DATE;
                                        END;`;
