//This Function is used to update a User information in system. 
//Params is a JSON object { field : fieldval , .....}
exports.updateUserInfo = function(req,res,params,callback) {
    // query to update into User table.
    conn.query(userQueries.userUpdateQueries.updateUserInfo, params, function(err, result) {
      if(err) return err;

      else callback(req,res);
    });
};

exports.SuspendUser = function(req,res,params,callback) {
    // query to update into User table.
    conn.query(userQueries.userUpdateQueries.suspendUser, params, function(err, result) {
        if(err) return err;
        else callback(req,res);
    });
};

exports.UnSuspendUser = function(req,res,params,callback) {
    // query to update into User table.
    conn.query(userQueries.userUpdateQueries.unSuspendUser, params, function(err, result) {
        if(err) return err;

        else callback(req,res);
    });
};