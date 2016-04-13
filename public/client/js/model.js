$(document).ready(function() {
    /**
     * Created by Priyanka on 4/12/2016.
     */

    //alert("hello");

    function fieldModel() {
        var self = this;
        var noTracker = 4;
        self.myFieldList = ko.observableArray([{label: "TimeStamp", fname: "flowtimestamp"},{label: "Destination IP", fname: "destination_ip"},
            {label: "Destination VN", fname: "destination_vn"}, {label: "Direction Ingress", fname: "direction_ingress"}]);

        self.removeField = function (dynamicField) {
            self.myFieldList.remove(dynamicField);
        }

        self.addField = function () {
            noTracker++;
            self.myFieldList.push({label: "Variable " + noTracker, fname: "var" + noTracker});
        }
    }
    ko.applyBindings(fieldModel);



});