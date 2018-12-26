//query to retrieve all hotels in system.
exports.getAllHotels = `SELECT * FROM Hotel WHERE isSuspended = 0 AND isDeleted = 0`;

//query to retrieve the hotels that a specific owner have in the system.
exports.getOwnerHotels = `SELECT * FROM Hotel WHERE OwnerUser=? AND isDeleted = 0`;
exports.getHotelInfo = `SELECT * FROM Hotel WHERE OwnerUser=? AND Name=? AND Branch=? AND isDeleted=0`;

//query to retrieve the hotels a specific broker is responsible for in the system.
exports.getBrokerHotels = `SELECT * FROM Hotel WHERE isSuspended=0 AND BrokerUser=? AND isDeleted =0`;

//query to retrieve the hotels "that are suspended" a specific broker is responsible for in the system.
exports.getBrokerSuspendedHotels = `SELECT Name,Branch,Location,Images,OwnerUser FROM Hotel WHERE isSuspended=1 AND BrokerUser=? AND isDeleted =0`;

//query to retrieve teh hotel requests for all brokers "Not Approved yet and not Denied".
exports.getHotelRequests = `SELECT Name,Branch,Location,Images,OwnerUser,isPremium FROM Hotel WHERE isApproved = 0 AND isDeleted = 0`;

exports.getAllTimeOwed = `SELECT SUM(price) AS TotalOwed, room.HotelName,room.HotelBranch FROM room JOIN (SELECT reservation.RoomNumber, reservation.HotelName, reservation.HotelBranch FROM reservation JOIN hotel WHERE reservation.HotelBranch = ? AND reservation.HotelName = ? AND reservation.isChecked_in = 1 AND hotel.OwnerUser = ? AND reservation.HotelName = hotel.Name AND reservation.HotelBranch = hotel.Branch) AS ReservedRooms WHERE ReservedRooms.RoomNumber = room.Number AND ReservedRooms.HotelName = room.HotelName AND ReservedRooms.HotelBranch = room.HotelBranch`;

/*SELECT SUM(price) AS TotalOwed, room.HotelName,room.HotelBranch FROM room JOIN (SELECT reservation.RoomNumber, reservation.HotelName, reservation.HotelBranch FROM reservation JOIN hotel WHERE reservation.HotelBranch = "Jamaalview" AND reservation.HotelName = "ea" AND reservation.isChecked_in = 1 AND AND hotel.OwnerUser = 'Amr'reservation.HotelName = hotel.Name AND reservation.HotelBranch = hotel.Branch) AS ReservedRooms WHERE ReservedRooms.RoomNumber = room.Number AND ReservedRooms.HotelName = room.HotelName AND ReservedRooms.HotelBranch = room.HotelBranch*/
