module.exports = function() {
  // query to create RatesRelation
  conn.query(tableCreation.RatesRelationTable, function(err, result) {
    CheckForError(err, result, "Rate Relation Table");
  });
};
