exports.retrieveUserResList = "SELECT Room.* \
                               FROM RequestsRelation JOIN Room \
                               WHERE CustomerUser = ? AND \
                               RoomNumber = Number AND \
                               RequestsRelation.HotelName = Room.HotelName AND \
                               RequestsRelation.HotelBranch = Room.HotelBanch";
