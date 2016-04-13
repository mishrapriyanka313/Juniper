var bodyParser = require('body-parser');
var express = require('express');

var app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = function(app, trafficModel) {
    app.get('/api/traffic', getTrafficInformation);
    
    

    function getTrafficInformation(req, res) {

        var trafficInformation = req.body;

        var destination_ip1 = req.query.destination_ip1;
        var source_ip123 = req.query.source_ip123;
        var destination_vn1 = req.query.destination_vn1;
        var source_vn1 = req.query.source_vn1;


        var direction_ingress1 = req.query.direction_ingress1;
        var sum_packets1 = req.query.sum_packets1;
        var destination_port1 = req.query.destination_port1;
        var source_port1 = req.query.source_port1;
        var sum_bytes_kb1 = req.query.sum_bytes_kb1;
        var sum_packets1 = req.query.sum_packets1;



        var attributeList = req.query.attributes;

        var startT = req.query.starttime;
        //var startTime = new Date(startT).toISOString().slice(0, 19).replace('T', ' ');

        var endT = req.query.endtime;
        //var endTime = new Date(endT).toISOString().slice(0, 19).replace('T', ' ');

        var quer="";
        if (destination_ip1.length > 0) {
                quer += " and destination_ip=\'" + destination_ip1+"\'";
        }
        if (source_ip123.length > 0) {
            quer += " and source_ip=\'" + source_ip123+"\'";
        }
        if (destination_vn1.length > 0) {
            quer += " and destination_vn=\'" + destination_vn1+"\'";
        }
        if (source_vn1.length > 0) {
            quer += " and source_vn=\'" + source_vn1+"\'";
        }

        if (direction_ingress1.length > 0) {
            quer += " and direction_ingress=" + direction_ingress1;
        }
        if (sum_packets1.length > 0) {
            quer += " and sum_packets=" + sum_packets1;
        }
        if (destination_port1.length > 0) {
            quer += " and destination_port=" + destination_port1;
        }
        if (source_port1.length > 0) {
            quer += " and source_port=" + source_port1;
        }
        if (sum_bytes_kb1.length > 0) {
            quer += " and sum_bytes_kb=" + sum_bytes_kb1;
        }
        if (sum_packets1.length > 0) {
            quer += " and sum_packets=" + sum_packets1;
        }

        

        // Converting Start and End Time into a format that mysql understand
        var startTime = (new Date((new Date((new Date(new Date(startT))).toISOString())).getTime() - ((new Date()).getTimezoneOffset() * 60000))).toISOString().slice(0, 19).replace('T', ' ');
        var endTime = (new Date((new Date((new Date(new Date(endT))).toISOString())).getTime() - ((new Date()).getTimezoneOffset() * 60000))).toISOString().slice(0, 19).replace('T', ' ');

        /** Used for Testing 
        //console.log("start time: "+startTime);
        //console.log(attributeList[0]+ " "+ attributeList[0].length);
        //console.log("end time: "+endTime);
         console.log("And Query generated: "+quer);
         //console.log(fields);
         **/

        var fields = attributeList[0];
        
        var attribute = 1;
        if(attributeList[0].length!=1) {
            for (var i = 1; i < attributeList.length; i++) {
                fields = fields + ',' + attributeList[i];
            }
        }
        else {
            for (var i = 1; i < attributeList.length; i++) {
                fields = fields + attributeList[i];
            }
        }
        

       trafficModel
            .getTrafficInfo(fields, startTime, endTime,quer)
            .then (function (result){
               res.json(result);
     
            });

            

    }


};
