//String Query to retrieve username "if exists" based on login information ( username , password)
exports.retrieveUser = "SELECT Username FROM User WHERE Username = ? AND Password = ?";

//String Query to retrieve Profile information "if exists" based on username value.
exports.retrieveProfile = "SELECT * FROM User WHERE Username = ?";

//String Query to retrieve the list of BlackListed ( for 1 week )Users in system. 
exports.retrieveBlackList = "SELECT Username,Name FROM User WHERE isBlackListed = 1";
