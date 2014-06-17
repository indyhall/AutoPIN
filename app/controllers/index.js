// Eventually load settings if no PIN stored
// var settingsView = Alloy.createController('settings').getView();
// settingsView.open();

var base = (Ti.Platform.displayCaps.platformHeight - 291) / 2;

$.hook.top = (base + 'dip');
$.base.top = ((base + 100) + 'dip');

var hookAnimations = {
	'locked': Titanium.UI.createAnimation({
		top: base + 'dip',
		duration: 400,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_OUT
	}),
	'unlocked': Titanium.UI.createAnimation({
		top: (base - 17) + 'dip',
		duration: 400,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_IN
	}) 
};
var baseAnimations = {
	'locked': Titanium.UI.createAnimation({
		top: (base + 100) + 'dip',
		duration: 400,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_OUT
	}),
	'unlocked': Titanium.UI.createAnimation({
		top: (base + 117) + 'dip',
		duration: 400,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_IN
	}) 
};
var windowAnimations = {
	'locked': Titanium.UI.createAnimation({
		backgroundColor: '#ff4e00',
		duration: 400,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_IN
	}),
	'near': Titanium.UI.createAnimation({
		backgroundColor: '#edc00e',
		duration: 400,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_IN
	}),
	'unlocked': Titanium.UI.createAnimation({
		backgroundColor: '#93d341',
		duration: 400,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_IN
	}) 
};

var state = 'locked';

var TiBeacons = require('org.beuckman.tibeacons');
TiBeacons.addEventListener("beaconProximity", function(e){
	switch (e.proximity) {
		case 'immediate':
			state = 'unlocked';
			$.hook.animate(hookAnimations[state]);
			$.base.animate(baseAnimations[state]);
			$.index.animate(windowAnimations[state]);
			break;
			
		case 'near': 
			state = 'locked';
			$.hook.animate(hookAnimations[state]);
			$.base.animate(baseAnimations[state]);
			$.index.animate(windowAnimations['near']);
			break;
			
		default:
			state = 'locked';
			$.hook.animate(hookAnimations[state]);
			$.base.animate(baseAnimations[state]);
			$.index.animate(windowAnimations[state]);
			break;
	}
});

$.index.open();
