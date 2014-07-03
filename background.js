//not working ATM

var host = window.location.host;

if (host === 'news.ycombinator.com') {
	var howMany = $('.comhead:contains("medium.com")').length;
	chrome.browserAction.setBadgeText({'text': howMany});

}
else if (host === 'news.layervault.com') {
	var howMany = $('span:contains("medium.com")').length;
	chrome.browserAction.setBadgeText({'text': howMany});
}
else {
	//do nothing
}
