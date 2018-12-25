//query to retrieve all hotels in system.
exports.getAllHotels = `SELECT * FROM Hotel WHERE isSuspended = 0 AND isDeleted = 0`;

//query to retrieve the hotels that a specific owner have in the system. 
exports.getOwnerHotels = `SELECT * FROM Hotel WHERE OwnerUser=? AND isDeleted = 0`;

//query to retrieve the hotels a specific broker is responsible for in the system.
exports.getBrokerHotels = `SELECT * FROM Hotel WHERE isSuspended=0 AND BrokerUser=? AND isDeleted =0`;

//query to retrieve the hotels "that are suspended" a specific broker is responsible for in the system.
exports.getBrokerSuspendedHotels = `SELECT Name,Branch,Location,Images,OwnerUser FROM Hotel WHERE isSuspended=1 AND BrokerUser=? AND isDeleted =0`;

//query to retrieve teh hotel requests for all brokers "Not Approved yet and not Denied". 
exports.getHotelRequests = `SELECT Name,Branch,Location,Images,OwnerUser,isPremium FROM Hotel WHERE isApproved = 0 AND isDeleted = 0`;


