//This function approves a reservation can be made on this hotel. 
//params should be in the form of [ID];
exports.approveReservation = function(params){
    conn.query(resQueries.resUpdateQueries.approveReservation, params, function(err, result, fields) {
        if(err) console.log(err);
        else console.log(result);
      });
};

//This function checks in a reservation when a user shows up. 
//params should be in the form of [ID];
exports.checkInReservation = function(params){
    conn.query(resQueries.resUpdateQueries.checkInReservation, params, function(err, result, fields) {
        if(err) console.log(err);
        else console.log(result);
      });
};