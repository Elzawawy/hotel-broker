//File Responsible for requestRelation Table Creation.
module.exports = function() {
  // query to create Requests Relation Table
  conn.query(tableCreation.RequestsRelationTable, function(err, result) {
    CheckForError(err, result, "Requests Relation Table");
  });
};
