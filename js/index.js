$('#portfoliobtn').click(function(){
	const portY = $('.portfolio').offset().top;
	$('html,body').animate({scrollTop:(portY)},300);
});

$('#contactbtn').click(function(){
	const contactY = $('.contact').offset().top;
	$('html,body').animate({scrollTop:(contactY)},300);
});