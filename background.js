var paused = false;

chrome.storage.local.set({'isPaused': false});

chrome.browserAction.onClicked.addListener(function() {
	paused = !paused
	if (paused) {
		chrome.browserAction.setIcon({path: "images/off.png"});
		chrome.storage.local.set({'isPaused': true});
		/* pause */
	}
	else {
		chrome.browserAction.setIcon({path: "images/on.png"});
		chrome.storage.local.set({'isPaused': false});
		/* continue */
	}
});
