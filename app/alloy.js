// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

/* */
var TiBeacons = require('org.beuckman.tibeacons');

TiBeacons.enableAutoRanging();

TiBeacons.startMonitoringForRegion({
    uuid : "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
    identifier : "Mint Green Estimote",
    major: 51624,
    minor: 11032
});

TiBeacons.addEventListener("enteredRegion", function(e) {
	Ti.API.info('Entered Region: ' + e.identifier);
});

TiBeacons.addEventListener("exitedRegion", function(e) {
	Ti.API.info('Exited Region: ' + e.identifier);
});

TiBeacons.addEventListener("determinedRegionState", function(e) {
	Ti.API.info('Determined Region State: "' + e.identifier + '" - ' + e.regionState);
});

TiBeacons.addEventListener("beaconProximity", function(e){
   Ti.API.info('Beacon Proximity: "' + e.identifier + '" is ' + e.proximity);
});
/* */