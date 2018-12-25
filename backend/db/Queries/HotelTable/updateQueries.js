//
exports.suspendHotel = `UPDATE Hotel SET isSuspended= 1 WHERE Name = ? AND Branch = ? AND isDeleted = 0`;

exports.activateHotel = `UPDATE Hotel SET isSuspended= 0 WHERE Name = ? AND Branch = ? AND isDeleted = 0`;


exports.approveHotel = `UPDATE Hotel SET isApproved = 1 WHERE Name = ? AND Branch  = ? AND isDeleted = 0`;

exports.denyHotel = `UPDATE Hotel SET isApproved=0 WHERE Name = ? AND Branch = ? AND isDeleted = 0`; 


