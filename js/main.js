$(document).ready(function(){
	$('.according__inquire').click(function(){
		$(this).next('.content1.1').slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().children('.content').slideUp();
		$(this).parent().siblings().removeClass('active');
	});
});