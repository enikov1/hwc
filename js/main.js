$(document).ready(function () {

	// customSelect

	$('.custom-select').customSelect();

	$('.custom-select-search').customSelect({
		search: true,
	});

	$('.item-bag:last').addClass('last');

	// button_top

	$(window).scroll(function(){

		let scroll_pos = 500;

		if($(this).scrollTop() >= scroll_pos){
			$('.button-top').addClass('active');
			// $('body').addClass('body-sticky');
		}
		else if ($(this).scrollTop() <= scroll_pos){
			$('.button-top').removeClass('active');
			// $('body').removeClass('body-sticky');
		}
	});

	$('.button-top').on('click', function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});

	// menu

	$('.burger').on('click', function() {
		$('.menu-mobile').addClass('active');

		$('body').addClass('scroll-hidden');
	});

	$('.menu-mobile-button').on('click', function() {
		$('.menu-mobile').removeClass('active');

		$('body').removeClass('scroll-hidden');
	});

	// popup

	$('#filter-active').on('click', function() {
		$('#filter-modal').fadeIn();
	});

	$('.modal-close').on('click', function() {
		$('.modal-base').fadeOut();
	});

	$('#bakc-active').on('click', function(e) {
		e.preventDefault();
		
		$('#added-to-bag').fadeIn();
	});

	// account

	$('.table .item').each(function() {

		let _this = $(this);

		$(this).find('.show-table').on('click', function() {
			_this.toggleClass('active');
		});
	});

	$('.table .address-form').each(function() {
		let _this = $(this);

		$(this).find('.button-add-item').on('click', function() {
			_this.toggleClass('active-form-add');
		});
	});


	// cards

	$('.field-option').on('click', function() {

		if($(this).closest('.selected').hasClass('selected-active')) {
			$(this).closest('.selected').removeClass('selected-active');
		} else {
			$('.selected.selected-active').removeClass('selected-active');
			$(this).closest('.selected').addClass('selected-active');
		}

	});

	$('.scrollbar-inner').scrollbar();

	// faq

	$('.tabs h3').on('click', function() {

		let _this = $(this);

		_this.toggleClass('active').next().toggle();;
		// _this.next().toggle();

	});

	// header

	$('.header-col-split-button .ellips').each(function() {
		let item_content = $(this).text();

		if(item_content > 0) {
			$(this).addClass('active');
		}
	});

	$(window).scroll(function(){

		let scroll_pos = 140;

		if($(this).scrollTop() >= scroll_pos){
			$('.header').addClass('header-sticky');
			$('body').addClass('body-sticky');
		}
		else if ($(this).scrollTop() <= scroll_pos){
			$('.header').removeClass('header-sticky');
			$('body').removeClass('body-sticky');
		}
	});

	// favorite not login

	$('#action-popup-logged').on('click', function() {
		$('.popup').addClass('popup-active');
	});

	$('.popup-close').on('click', function() {
		$('.popup').removeClass('popup-active');
	});

	// upload file

	$('.upload-file').each(function() {

		let _this = $(this);

		$(this).find('input[type="file"]').change(function() {
			if($(this)[0].files[0]) 
				_this.find('.field').text($(this)[0].files[0].name);
		});

	});


	// product page

	$('.custom-select-opener').each(function() {
		$(this).append('<button class="arrow" type="button"><i class="icon icon-arrow-left"></i></button>');
	});

	// dataPicker

	let dataPick = $('.dataPick'),
		fieldDataWidth = dataPick.innerWidth();

	dataPick.datepicker({
		multidate: true,
		calendarWeeks: true,
		todayHighlight: true,
		autoSize: true,
		beforeShow: function(datepicker) {
			console.log(1);
		}
	});

	let owlProduct = $('.base-cell_image');

	owlProduct.owlCarousel({
		items: 1,
		// onDragged: callback
	});

	owlProduct.on('initialized.owl.carousel changed.owl.carousel', function(event) {

	let $menuCounterThis = $('.owl-page_this'), // Контейнер вывода текущего слайда
		$menuCounterTotal = $('.owl-page_total'), // Контейнер вывода общего количества слайдов
		menuCloned = $( this ).find( '.cloned' ).length, // Количество клонированных элементов
		menuIndex = event.item.index + 1, // Номер текущего слайда
		menuCount = event.item.count; // Общее количество слайдов (без клонированных)

	if ( menuIndex > menuCount ) {
		$menuCounterThis.text( menuIndex - menuCloned + ( menuCloned - menuCount )   );
	} else {
		$menuCounterThis.text( menuIndex );
	}

	$menuCounterTotal.text( menuCount );

	//   $('#_js-cell-init .cell-image').each(function(i,e) {
		$('#_js-cell-init .cell-image').eq(menuIndex - 1).addClass('active').siblings('.active').removeClass('active');
		$('#_js-cell-modal-init .cell-image').eq(menuIndex - 1).addClass('active').siblings('.active').removeClass('active');
	//   });
	

	});

	$('.cell-prev').on('click', function() {
		owlProduct.trigger('prev.owl.carousel');
	});

	$('.cell-next').on('click', function() {
		owlProduct.trigger('next.owl.carousel');
		
	});

	$('#_js-cell-init .cell-image, #_js-cell-modal-init .cell-image').each(function(i,e) {

		
		// i++;
		$(this).on('click', function() {
			
			
			owlProduct.trigger('to.owl.carousel', [i]);
			$(this).addClass('active').siblings('.active').removeClass('active');
		});
		
	});

	$('#base-cell_screen').on('click', function() {
		$('.modal-event').fadeIn();
		$('body').addClass('scroll-remove');
	});

	$('.modal-event_close button').on('click', function() {
		$('.modal-event').fadeOut();
		$('body').removeClass('scroll-remove');
	});

	// tabs

	$('.tab-item').each(function() {
		$(this).find('.tab-item_header').on('click', function() {
			$(this).parent().toggleClass('active').siblings('.active').removeClass('active');
		});
	});	

	// 

	


	// slider top

	$('#slider-init').owlCarousel({
		items: 12,
		dots: false,
		nav: true,
		navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
	
		responsive:{
			300: {
				items: 3
			},
			900: {
				items: 12
			}
		}
	});

});