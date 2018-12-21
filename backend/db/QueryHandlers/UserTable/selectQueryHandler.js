//retrieveUser() method should be called on User login to verify his/her existence.
//params should be in the form ['username','password']
//returns either a Username indicating good news or NULl for Oops !
exports.retrieveUser = function (params) {
    //query to retrieve Username if username and password exists, otherwise returns NULL
    conn.query(userQueries.selectUserQueries.retrieveUser, params, function (err, result, fields) {
        if(err) return null;
        else return result;
    });
};