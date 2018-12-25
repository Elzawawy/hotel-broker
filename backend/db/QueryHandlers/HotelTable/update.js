exports.updateHotel = function (res,params){
    conn.query(hotelQueries.hotelUpdate.suspendHotel,params, function(
        err,
        result,
    ) {
        console.log(params);
        if(err) return null;
        if(params[0].isSuspended === 0){
            res.redirect("/broker/showSuspendedHotels");
        }
        else{
            res.redirect("/broker/showHotels")
        }
    });
};