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

		$('.doug_fir_photo').css('z-index', '5');
	},

	'mouseleave .doug_fir_photo': function(ev, template){

		var container = template.$('#home_container');

		container.css('opacity', 1);

		var sunrise = template.$('#sunrise');
	},

	'mouseenter .trees_bottom': function(ev, template){

		var trees = template.$('.trees_bottom');

		trees.css('opacity', 0.4);
	},

	'mouseleave .trees_bottom': function(ev, template){

		var trees = template.$('.trees_bottom');

		trees.css('opacity', 1);
	},

	'click .doug_fir_photo': function(ev, template){
		ev.preventDefault();

		// var scroll_height = ($(window).height()/1.5);

		var $image = $('.doug_fir_photo');

      	var scroll_height = 2*($image.offset().top) + 2*($image.height());

      	// var scroll_height = $image.offset().top + ($(window).height());

      	$("html, body").animate({ scrollTop: scroll_height + "px"}, 'slow');

      	$('#fir_sure_sun').fadeIn(750);
      	$('.home_menu').fadeIn(750);

	},

	'click #fir_sure_nw': function(ev, template){
		ev.preventDefault();

		var $image = $('#fir_sure_nw');

		var scroll_height = ($(window).height()/1.5);

		$("html, body").animate({ scrollTop: scroll_height + "px"}, 'slow');

	},


	'mouseenter #fir_sure_sun': function(ev, template){
		ev.preventDefault();

		$('#fir_sure_sun').css('height', '46%');
		$('#fir_sure_sun').css('width', '46%');

	},

	'mouseleave #fir_sure_sun': function(ev, template){
		ev.preventDefault();

		$('#fir_sure_sun').css('height', '40%');
		$('#fir_sure_sun').css('width', '40%');
	}

});






