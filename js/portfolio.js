$(function() {
	$('.gallerycur').on('click', '.gallery-image', function() {
		$('.gallery-image').removeClass('gallery-active');
		$(this).addClass('gallery-active');
		$('.big-cur_image').attr('src', ''+$(this).attr('src')+'');
	});
});