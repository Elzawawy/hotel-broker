exports.updateUserInfo = "UPDATE User SET ? WHERE Username = ?";

exports.suspendUser = "UPDATE User SET isBlacklisted=1 WHERE Username = ?";

exports.unSuspendUser = "UPDATE User SET isBlacklisted=0 WHERE Username = ?";