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

//retrieveProfile() method should be called on Profile view request to get information.
//params should be in the form ['username']
//returns either Information of user indicating good news or NULl for Oops !
exports.retrieveProfile = function(params) {
    conn.query(userQueries.selectUserQueries.retrieveProfile, params,function(err,result,fields){
        if(err) return null;
        else return result;
    });
};

//Returns a BlackList of the Users suspended automatically or manually for 1 week from system. Returns their Usernames and Names only. 
exports.retrieveBlackList = function() {
    conn.query(userQueries.selectUserQueries.retrieveBlackList,function(err,result,fields){
        if(err) return null;
        else return result;
    });
};
//Returns a list of all users in system. Username and Name of each user is only returned in that case.
exports.retrieveUserList = function(){
    conn.query(userQueries.selectUserQueries.retrieveUserList,function(err,result,fields){
        if(err) return null;
        else return result;
    });
};

//Returns a list of all classA users in system. Username and name of each user only returned in that case.
exports.retrieveClassAList = function(){
        conn.query(userQueries.selectUserQueries.retrieveClassAList, function (err, result, fields) {
            if(err) return null;
            else return result;
        });
};

