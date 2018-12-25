exports.SuspendHotel = function (req,res,params,callback){
    conn.query(hotelQueries.hotelUpdate.suspendHotel,params, function(
        err,
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

exports.ApproveHotel = function (req,res,params,callback){
    conn.query(hotelQueries.hotelUpdate.approveHotel,params, function(
        err,
        result,
    ) {
        console.log(params);
        if(err) return null;
        else callback(req,res);
    });
};

exports.DenyHotel = function (req,res,params,callback){
    conn.query(hotelQueries.hotelUpdate.denyHotel,params, function(
        err,
        result,
    ) {
        console.log(params);
        if(err) return null;
        else callback(req,res);
    });
};

exports.AssignHotelToBroker = function (params){
    conn.query(hotelQueries.hotelUpdate.assignHotelToBroker,params, function(
        err,
        result,
    ) {
        console.log(params);
        if(err) return null;

    });
};