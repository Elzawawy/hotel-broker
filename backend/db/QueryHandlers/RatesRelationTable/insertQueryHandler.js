exports.insertRating = function(req,res,params,callback) {
    // query to insert into hotel table.
    conn.query(ratesRelation, params, function(err, result, fields) {
      if(err) return null;
      else {
          console.log("Rating Added !");
          callback(req, res);
      }
    });
};