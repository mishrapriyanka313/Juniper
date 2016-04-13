var q = require('q');

module.exports = function (connection) {
    var api = {
        getTrafficInfo: getTrafficInfo
    };
    return api;
    /*
    Used for Testing
     connection.query('SELECT ' + fields + ' from trafficflow;',
     function (err, rows) {
     if (err) throw err;
     deferred.resolve(rows);
     });
     */

    function getTrafficInfo(fields, startTime, endTime,query1) {
        var deferred = q.defer();
        console.log(fields);
        console.log(query1)
        console.log('SELECT ' + fields + ' from trafficflow WHERE flowtimestamp BETWEEN \'' + startTime + '\' AND \'' + endTime + '\' '+query1 + ' ;');

        connection.query('SELECT ' + fields + ' from trafficflow WHERE flowtimestamp BETWEEN \'' + startTime + '\' AND \''
            + endTime + '\' '+query1 + ' ;',
            function (err, rows) {
                if (err) throw err;
                deferred.resolve(rows);
            });
        return deferred.promise;

    }


};