module.exports = function() {
  var siteName = process.env.NAME || "No Site Name"
  
 return {
    title: process.env.NAME,
    siteName: siteName
  }
}