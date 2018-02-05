var request = require("request");
var rp = require("request-promise-native");
var apiUrl = process.env.API_URL;

module.exports = function() {
  var apiRequest = function (subpath, query, callback) {
    
    var options = {
      uri: apiUrl + subpath,
      qs: query
    }
    
    rp(options)
    .then(function(response){
      callback(JSON.parse(response).data);
      return;
    })
    .catch( function(err) {
      console.log(err)
      return;
    });
          
  }  
  
  return {
    apiRequest: apiRequest
  }
}