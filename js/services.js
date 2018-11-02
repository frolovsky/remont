$(function() {
	$('body').append('<div class="overlay" id="overlay"></div><div class="modal-image" id="moimage"><img src="img/slider/1.jpg" alt"Увеличенное изображение" class="big-image"></div>');

 	$('.services-list').hide();

	$('.list-tab_name').click(function(){
		$(this).next('.services-list').slideToggle();
		$(this).parent('.list-tab').toggleClass('visible');
	});

	var overlay = $('#overlay'),
		gImage  = $('.gallery-image'),
		modalW  = $('#moimage'),
		newImg  = modalW.children('img');
	if (document.body.clientWidth > 680) {
		gImage.click(function(){
			var newSrc = $(this).attr('data-big');
			newImg.attr('src', ''+newSrc+'');
			overlay.fadeIn();
			modalW.fadeIn();
			newImg.fadeIn();
		});
		overlay.click(function(){
			$(this).fadeOut();
			modalW.fadeOut();
			newImg.fadeOut();
		});
	}
});