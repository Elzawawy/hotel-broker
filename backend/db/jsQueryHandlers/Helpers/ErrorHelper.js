//File Responsible for Error Checking.
module.exports = function CheckForError(err, result, name) {
  if (err && err.sqlMessage.toString().match("already exists")) {
    console.log(err.sqlMessage);
  } else if (err) throw err.sqlMessage;
  else console.log(name + " created!");
};
