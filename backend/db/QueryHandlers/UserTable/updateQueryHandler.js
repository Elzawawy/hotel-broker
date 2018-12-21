//This Function is used to update a User information in system. 
//Params is a JSON object { field : fieldval , .....}
module.exports = function(params) {
    // query to insert into User table.
    conn.query(userQueries.userUpdateQueries.updateUserInfo, params, function(err, result, fields) {
      if(err) console.log(err);
      else console.log(result);
    });
};