$(function() {
	
	var sliderWrapper = $('.slide-vis'),
		sliderList    = $('.slider-list'),
		sliderItem    = $('.slider-item'),
		slideNow      = 1,
		slideCount    = sliderItem.length,
		slideSpeed    = 500,
		sliderWidth   = sliderWrapper.width() * slideCount,
		slideWidth    = sliderWidth / slideCount,
		prevBtn 	  = $('.slide-prev'),
		nextBtn   	  = $('.slide-next'),
		translateWidth = 0,
		intervalSlide  = 0;

		intervalSlide = setInterval(nextSlide, 6000);


		function nextSlide() {
			slideNow++;
			translateWidth -= slideWidth;
			if (slideNow > slideCount) {
				translateWidth = 0;
				slideNow = 1;
			}
			sliderList.css('transform', 'translateX('+translateWidth+'px)');
			sliderList.css('-webkit-transform', 'translateX(-'+translateWidth+'px)');
			sliderList.css('-ms-transform', 'translateX(-'+translateWidth+'px)');
		}
		function prevSlide() {
			slideNow--;
			translateWidth += slideWidth;
			if (slideNow < 1) {
				translateWidth = -(slideWidth * (slideCount - 1));
				slideNow = slideCount;
			}
			sliderList.css('transform', 'translateX('+translateWidth+'px)');
		}
		sliderList.css('width', ''+sliderWidth+'px');
		sliderItem.css('width', ''+slideWidth+'px');
		sliderList.css('transition', 'all '+slideSpeed+'ms');
		prevBtn.click(function(){
			prevSlide();
			clearInterval(intervalSlide);
		});
		
		nextBtn.click(function(){
			nextSlide();
			clearInterval(intervalSlide);
		});

		var fbSliderWrap = $('.fb-slider'),
	    fbSliderList = $('.fbs-list'),
	    fbTranslateWidth = 0,
	    fbSlideItem  = $('.fbs-item'),
	    fbSlideCount = fbSlideItem.length,
	    fbSlideNow = 1,
	    fbSlideWidth = 0;

	    $('.fbsc-pag').click(function(){
	    	$('.fbsc-pag').removeClass('active-pag');
			var numFbSlide = $(this).attr('data-pag');
			$(this).addClass('active-pag');
			fbTranslateWidth = (fbSliderList.width() / fbSlideCount) * (numFbSlide - 1);
			fbSliderList.css('transform', 'translateX(-'+fbTranslateWidth+'px)');
			fbSliderList.css('-webkit-transform', 'translateX(-'+fbTranslateWidth+'px)');
			fbSliderList.css('-ms-transform', 'translateX(-'+fbTranslateWidth+'px)');
	    });

	function simpleCalc() {
		var remontPrice = $('#sc-select option:selected').attr('data-price'),
			remontAmout = $('#sc-input').val(),
			remontTotal = +remontPrice * +remontAmout;

		$('.scf-output').text(''+remontTotal+'');
	}
	$('.sc-form').change(function(){
		simpleCalc();
	});
	$('.sc-form').keyup(function(){
		simpleCalc();
	});
	if (document.body.clientWidth < 860) {
		$('.scf-input').attr('type', 'number');
	}

	var bsliderSw = document.getElementById('bslider');
	var initialPoint;
	var finalPoint;
	bsliderSw.addEventListener('touchstart', function(event) {
	initialPoint=event.changedTouches[0];
	});
	bsliderSw.addEventListener('touchend', function(event) {
		finalPoint=event.changedTouches[0];
		var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
		var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
		if (xAbs > 40 && yAbs < xAbs) {
			if (finalPoint.pageX < initialPoint.pageX) {
				nextSlide();
			}
			else {
				prevSlide();
			}
		}
	}, false);
});