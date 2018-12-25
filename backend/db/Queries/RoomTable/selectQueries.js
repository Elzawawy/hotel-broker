//query that returns all rooms in a specific hotel not regarding what is booked and what is not.
exports.getAllHotelRooms = `SELECT Number,Type,Price FROM Room WHERE HotelName = ? AND HotelBranch = ?`;

//query that returns free rooms only in a specific hotel.
//fi moshkla hena en law room mat7gztsh abl keda msh htzhr. 
exports.getFreeRooms = `SELECT Number,price FROM Room LEFT OUTER JOIN Reservation 
                        WHERE Number = RoomNumber 
                        AND Room.HotelName = Reservation.HotelName 
                        AND Room.HotelBranch = Reservation.HotelBranch 
                        AND Room.HotelName = ? 
                        AND Room.HotelBranch = ?
                        AND Room.checkedOut <= ? 
                        AND Reservation.StartDate <= ?`;