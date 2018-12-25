
exports.suspendHotel = `UPDATE Hotel SET isSuspended= 1 WHERE Name = ? AND Branch = ? AND isDeleted = 0`;

exports.activateHotel = `UPDATE Hotel SET isSuspended= 0 WHERE Name = ? AND Branch = ? AND isDeleted = 0`;


exports.approveHotel = `UPDATE Hotel SET isApproved = 1 WHERE Name = ? AND Branch  = ? AND isDeleted = 0`;

exports.denyHotel = `UPDATE Hotel SET isDeleted=1 WHERE Name = ? AND Branch = ? AND isDeleted = 0`;

exports.assignHotelToBroker = `UPDATE Hotel SET BrokerUser=? WHERE Name=? AND Branch = ?`;

exports.editHotelInfo = `UPDATE Hotel SET ? WHERE Name = ? AND Branch = ?`;



