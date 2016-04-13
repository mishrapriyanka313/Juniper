module.exports = function (app, connection){
    var trafficModel = require("./model/traffic.model.js")(connection);
    var trafficService = require("./service/traffic.service.js")(app, trafficModel);
};