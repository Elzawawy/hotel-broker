exports.SuspendHotel = function (req,res,params,callback){
    conn.query(hotelQueries.hotelUpdate.suspendHotel,params, function(
        err,
        result,
    ) {
        console.log(params);
        if(err) return null;
        else callback(req,res);
    });
};

exports.ActivateHotel = function (req,res,params,callback){
    conn.query(hotelQueries.hotelUpdate.activateHotel,params, function(
        err,
        result,
    ) {
        console.log(params);
        if(err) return null;
        else callback(req,res);
    });
};