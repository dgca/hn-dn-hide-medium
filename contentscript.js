chrome.storage.local.get('isPaused',
	function(value){

		/**
		This is probably not the best way to do this.
		But, it works.
		Love,
		Percy
		**/

		// The closure we pass to the chrome.storage.local.get function is passed a parameter containing the value set in background.js using chrome.storage.local.set
		// In background.js we set an array to Chrome local storage, where isPaused is the key and the value is the boolean variable (plugin on or off)
		// Here, we grab that value by using the same key we set in background.js.

		isPaused = value['isPaused'];

		if (isPaused == false) {

			var host = window.location.host;

			function displayAlert(howMany) {
				//say how many were removed
				//singular or plural?!
				if (howMany < 2) {
					var word1 = 'post';
					var word2 = 'was';
				}
				else {
					var word1 = 'posts';
					var word2 = 'were';
				}
				//put the alert on the page
			$('body').append('<p id="hn-dn-alert">' + howMany + ' Medium ' + word1 + ' ' + word2 + ' hidden.</p>');
				setTimeout(function(){
					$('#hn-dn-alert').fadeOut(500, function(){
						$(this).remove();
					});
				}, 1000);
			}

			if (host === 'news.ycombinator.com') {
				var howMany = $('.comhead:contains("medium.com")').length;

				if (howMany > 0) {
					//remove author and comments data
					$('.comhead:contains("medium.com")').parent().parent().next().next().css('display', 'none');
					$('.comhead:contains("medium.com")').parent().parent().next().css('display', 'none');
					//remove title row
					$('.comhead:contains("medium.com")').parent().parent().css('display', 'none');
					displayAlert(howMany);
				}
			}
			else if (host === 'news.layervault.com') {
				//count removed items
				var howMany = $('span:contains("medium.com")').length;

				if (howMany > 0) {
					//remove items
					$('span:contains("medium.com")').parent().parent().css('display', 'none');
					displayAlert(howMany);
				}
			}
			else {
				//do nothing
			}
		}
	}
);
