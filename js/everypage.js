$(function() {
		$('.main-nav').append('<svg height="24" width="24" class="close-menu"><line x1="3" y1="3" x2="21" y2="21"/><line x1="3" y1="21" x2="21" y2="3"/></svg>');
		$('.open-menu').click(function() {
			$('.nav-list').slideDown();
			$(this).hide();
			$('.close-menu').show();
		});
		$('.close-menu').click(function() {
			$('.nav-list').slideUp();
			$('.close-menu').hide();
			$('.open-menu').fadeIn();
		});

	$(".scroll-top").click(function() {
         $("html, body").stop().animate({
             scrollTop: 0
         }, {
             duration: 300
         });
        return false;
     });

	if (document.body.clientWidth < 860) {
		$('#rphone').attr('type', 'number');
	}

	$('input[name="rphone"], .scf-input').keydown(function(event){
		if (event.keyCode != 8 && (event.keyCode < 48 || event.keyCode > 57) ) {
			event.preventDefault();
			$('body').append('<div class="error"><p>Используйте цифры</p></div>');
			$('.error').fadeIn();
			setTimeout(function(){
				$('.error').fadeOut();
			}, 2000);
		}
	});

	var underlay = $('#underlay');
	var	openForm = $('.open-popup');
	var	closeForm = $('#closep');

	underlay.click(function(){
		$('.recall').fadeOut();
		$(this).fadeOut();
	});

	openForm.click(function(){
		$('.recall').fadeIn();
		underlay.fadeIn();
		$('.complete-form').show();
	});
	
	closeForm.click(function(){
		$(this).parent('form').fadeOut();
		underlay.fadeOut();
	});

	$('.recall').submit(function(event){
		$.ajax({
			url: '../getmail.php',
			type: 'POST',
			data: $(this).serialize()
		})
		.done(function() {
			$('.recall').fadeOut();
			underlay.fadeOut();
			$('.complete-form').css('transform', 'translate(-50%, -50%');
			setTimeout(function(){
				$('.complete-form').css('transform', 'translate(-50%, -2000px');
			}, 3200);
		});
		event.preventDefault();
		return false;
	});

});