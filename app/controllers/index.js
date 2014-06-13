$.index.open();

var TiBeacons = require('org.beuckman.tibeacons');

TiBeacons.enableAutoRanging();

TiBeacons.startMonitoringForRegion({
    uuid : "D57092AC-DFAA-446C-8EF3-C81AA22815B5",
    identifier : "Chris's Mac",
    major: 5,
    minor: 5000
});

TiBeacons.addEventListener("enteredRegion", function(e) {
	Ti.API.info('enteredRegion: ' + JSON.stringify(e, null, 4));
	alert('Entered region.');
});

TiBeacons.addEventListener("exitedRegion", function(e) {
	Ti.API.info('exitedRegion: ' + JSON.stringify(e, null, 4));
});

TiBeacons.addEventListener("determinedRegionState", function(e) {
	Ti.API.info('determinedRegionState: ' + JSON.stringify(e, null, 4));
});

TiBeacons.addEventListener("beaconProximity", function(e){
   $.proximity.setText('Range: ' + e.proximity);
   Ti.API.info('beaconProximity: ' + JSON.stringify(e, null, 4));
});