

// chrome.storage.local.set({'isPaused': false});
// chrome.browserAction.setIcon({path: "images/on.png"});

chrome.storage.local.get('isPaused',
	function(value) {
		if (value['isPaused'] == undefined ) {
			chrome.browserAction.setIcon({path: "images/on.png"});
			chrome.storage.local.set({'isPaused': false});
		}
		else if (value['isPaused'] == false) {
			chrome.browserAction.onClicked.addListener(function() {
				chrome.browserAction.setIcon({path: "images/off.png"});
				chrome.storage.local.set({'isPaused': true});
			});
		}
		else {
			chrome.browserAction.onClicked.addListener(function() {
				chrome.browserAction.setIcon({path: "images/on.png"});
				chrome.storage.local.set({'isPaused': false});
			});
		}
	}
);
