var host = window.location.host;

if (host === 'news.ycombinator.com') {
	//remove author and comments data
	$('.comhead:contains("medium.com")').parent().parent().next().next().css('display', 'none');
	$('.comhead:contains("medium.com")').parent().parent().next().css('display', 'none');
	//remove title row
	$('.comhead:contains("medium.com")').parent().parent().css('display', 'none');
} else if (host === 'news.layervault.com') {
	$('span:contains("medium.com")').parent().parent().css('display', 'none');
} else {
	//do nothing
}
