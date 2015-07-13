//client/home/home.js

Router.route('home', {
	path: '/',
	layoutTemplate: 'homeLayoutTemplate',
	template: 'homeTemplate'
});


Template.homeLayoutTemplate.events({

	'mouseenter .doug_fir_photo': function(ev, template){

		var container = template.$('#home_container');

		container.css('opacity', 0.4);

		var sunrise = template.$('#sunrise');

		sunrise.css('visibility', 'visible');
	},

	'mouseleave .doug_fir_photo': function(ev, template){

		var container = template.$('#home_container');

		container.css('opacity', 1);

		var sunrise = template.$('#sunrise');

		sunrise.css('visibility', 'hidden');
	},

	'mouseenter #fir_sure_nw': function(ev, template){

		var suns = template.$('#fir_sure_nw');

		suns.css('opacity', 0.4);
	},

	'mouseleave #fir_sure_nw': function(ev, template){

		var suns = template.$('#fir_sure_nw');

		suns.css('opacity', 0.7);
	},

	'click .doug_fir_photo': function(ev, template){
		ev.preventDefault();

		// var scroll_height = ($(window).height()/1.5);

		var $image = $('.doug_fir_photo');

      	var scroll_height = 2*($image.offset().top) + 2*($image.height());

      	// var scroll_height = $image.offset().top + ($(window).height());

      	$("html, body").animate({ scrollTop: scroll_height + "px"}, 'slow');

      	// $('#fir_sure_sun').show();

      	$('#fir_sure_sun').fadeIn(750);
      	$('.home_menu').fadeIn(750);

	},

	'click #fir_sure_nw': function(ev, template){
		ev.preventDefault();

		// window.scrollTo(0, 0);

		var $image = $('#fir_sure_nw');

		var scroll_height = ($(window).height()/1.5);

		// var scroll_height = $image.offset().top + 2*($image.height());

		$("html, body").animate({ scrollTop: scroll_height + "px"}, 'slow');

	},

	'mouseenter .sun_menu': function(ev, template){
		ev.preventDefault();

		var $this = $(ev.target);

		$this.css('border-color', 'white');
		$this.css('background-color', 'black');
		$this.css('color', 'white');
	},

	'mouseleave .sun_menu': function(ev, template){
		ev.preventDefault();

		var $this = $(ev.target);

		$this.css('border-color', 'black');
		$this.css('background-color', 'white');
		$this.css('color', 'black');
	},

	'mouseenter #fir_sure_sun': function(ev, template){
		ev.preventDefault();

		$('#fir_sure_sun').css('height', '43%');
		$('#fir_sure_sun').css('width', '43%');
	},

	'mouseleave #fir_sure_sun': function(ev, template){
		ev.preventDefault();

		$('#fir_sure_sun').css('height', '40%');
		$('#fir_sure_sun').css('width', '40%');
	}

});






