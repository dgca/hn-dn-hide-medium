chrome.storage.local.get('isPaused',
	function(value) {
		if (value['isPaused'] == undefined) {
			chrome.storage.local.set({'isPaused': false});
			console.log(value);
		}
	});

chrome.browserAction.onClicked.addListener(function() {
  chrome.storage.local.get('isPaused',
    function(value) {
      if (value['isPaused'] == false) {
        chrome.browserAction.setIcon({path: "images/off.png"});
        chrome.storage.local.set({'isPaused': true});
      }
			else {
        chrome.browserAction.setIcon({path: "images/on.png"});
        chrome.storage.local.set({'isPaused': false});
      }
			console.log(value);
    }
  );
});
