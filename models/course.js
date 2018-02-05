var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Course = new Schema({
  apiId          : String,
  title          : String,
  projectId      : String
});

module.exports = mongoose.model("Course", Course);
