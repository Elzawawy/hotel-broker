exports.getAllHotels = `SELECT * FROM Hotel WHERE isSuspended=0`;

exports.getsuspendedHotels = `SELECT * FROM Hotel WHERE isSuspended=1`;


exports.getOwnerHotels = `SELECT * FROM Hotel WHERE OwnerUser=?`;

exports.getBrokerHotels = `SELECT * FROM Hotel WHERE BrokerUser=?`;
