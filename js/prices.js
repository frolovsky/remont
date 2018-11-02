$(document).ready(function() {
	$('.prices-open').click(function() {
		$('.prices-table').fadeToggle();
		$(this).toggleClass('prices-vis');
		if ( $(this).hasClass('prices-vis') ) {
			$('.out-full').css('transform', 'translateX(300px)');
		} else {
			$('.out-full').css('transform', 'translateX(0px)');
		}
	});
	$('.th-section').click(function(){
		$('.table-header').show();
		$(this).toggleClass('th-section-active');
		$(this).parents('tbody').next('.table-section:first').fadeToggle();
	});
	$('.calc-input').keydown(function(event){
		if (event.keyCode != 8 && (event.keyCode < 48 || event.keyCode > 57) ) {
			event.preventDefault();
			$('body').append('<div class="error"><p>Используйте цифры</p></div>');
			$('.error').fadeIn();
			setTimeout(function(){
				$('.error').fadeOut();
			}, 2000);
		}
	});
	$('.sc-form').change(function(){
		simpleCalc();
	});
	$('.sc-form').keyup(function(){
		simpleCalc();
	});
	if (document.body.clientWidth < 860) {
		$('.calc-input').attr('type', 'number');
		$('.scf-input').attr('type', 'number');
	}

	var priceAll = 0;
	localCost();
	sumCost();
	sectionCost();
	$('.prices-list').keyup(function() {
		localCost();
		sumCost();
		sectionCost();
	});

	function localCost() {
		$('.calc-input').each(function(i, elem){
			if ( $(this).val() != '0' && $(this).val() != ' ') {
				var priceMin = 0;
				var servCost = $(this).parent('.td-amount').siblings('.td-price').text();
				priceMin = +$(this).val() * +servCost;
				$(this).parent('.td-amount').siblings('.td-total').children('.local-out').text(priceMin);
			}
		});
	}
	function sumCost() {
		priceAll = 0;
		$('.local-out').each(function(i, elem){
			if ( +$(this).text() > 0 ) {
				var localPrice = +$(this).text();
				priceAll += localPrice;
				$('#outsum').text(priceAll);
			}
		});
	}
	function sectionCost() {
		$('.th-section').each(function(i, elem) {
			var sectionSum = 0;
			var sectionSub = $(this).parents('tbody:first');
			var sectionWrap = sectionSub.next('.table-section:first');
			var rowOut = sectionWrap.find('.local-out');
			rowOut.each(function(i, elem){
				sectionSum += +$(this).text();
			});
			$(this).attr('data-lp', ''+sectionSum+' руб');
		});
	}
	function simpleCalc() {
		var remontPrice = $('#sc-select option:selected').attr('data-price'),
			remontAmout = $('#sc-input').val(),
			remontTotal = +remontPrice * +remontAmout;

		$('.scf-output').text(''+remontTotal+'');
	}
});