exports.getAllHotels = `SELECT * FROM Hotel`;

exports.getOwnerHotels = `SELECT * FROM Hotel WHERE OwnerUser=?`;

exports.getBrokerHotels = `SELECT * FROM Hotel WHERE BrokerUser=?`;
