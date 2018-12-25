//This Function is used to update a User information in system. 
//Params is a JSON object { field : fieldval , .....}
exports.updateUserInfo = function(res,params) {
    // query to update into User table.
    conn.query(userQueries.userUpdateQueries.updateUserInfo, params, function(err, result) {
      if(err) return err;
      if(params[0].isBlacklisted === 1){
          res.redirect("/broker/showAllUsers");
      }
      if(params[0].isBlacklisted === 0){
          res.redirect("/broker/showSuspendedUsers");
      }
    });
};