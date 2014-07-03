var host = window.location.host;

if (host === 'news.ycombinator.com') {
	//remove author and comments data
	$('.comhead:contains("medium.com")').parent().parent().next().next().css('display', 'none');
	$('.comhead:contains("medium.com")').parent().parent().next().css('display', 'none');
	//remove title row
	$('.comhead:contains("medium.com")').parent().parent().css('display', 'none');
}
else if (host === 'news.layervault.com') {
	//count removed items
	var howMany = $('span:contains("medium.com")').length;

	if (howMany > 0) {
		//remove items
		$('span:contains("medium.com")').parent().parent().css('display', 'none');

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
		// $('#hn-dn-alert').css({
		// 	'position': 'fixed',
		// 	'top': '0',
		// 	'right': '0',
		// 	'padding': '15px 10px',
		// 	'margin': '10px',
		// 	'background-color': '#89C595',
		// 	'font-family': 'helvetica, sans-serif',
		// 	'font-weight': 'bold',
		// 	'font-size': '14px',
		// 	'border-radius': '10px',
		// 	'border': '1px solid #217D34'
		// });
		setTimeout(function(){
			$('#hn-dn-alert').fadeOut(500, function(){
				$(this).remove();
			});
		}, 1000);
	}
}
else {
	//do nothing
}
