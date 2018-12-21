//retrieveUserResList() method should be called to get a reservations list (curret and previous) 
//params should be in the form ['username'] and returns a list of results !
exports.retrieveUserResList = function (params) {
    //query to retrieve Username if username and password exists, otherwise returns NULL
    conn.query(resQueries.resSelectQueries.retrieveUserResList, params, function (err, result, fields) {
        if(err) console.log(err);
        else return result;
    });
};