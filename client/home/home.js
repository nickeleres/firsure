//client/home/home.js

Router.route('home', {
	path: '/',
	layoutTemplate: 'homeLayoutTemplate',
	template: 'homeTemplate'
});


Template.homeLayoutTemplate.events({

	'mouseenter #home_container': function(ev, template){

		var container = template.$('#home_container');

		container.css('opacity', 0.4);
	},

	'mouseleave #home_container': function(ev, template){

		var container = template.$('#home_container');

		container.css('opacity', 1);
	},

	'mouseenter .fir_sure_suns': function(ev, template){

		var suns = template.$('.fir_sure_suns');

		suns.css('opacity', 0.4);
	},

	'mouseleave .fir_sure_suns': function(ev, template){

		var suns = template.$('.fir_sure_suns');

		suns.css('opacity', 1);
	},

	'click #home_container': function(ev, template){
		ev.preventDefault();

		var scroll_height = ($(window).height()/2);

		$("html, body").animate({ scrollTop: scroll_height + "px"}, 'slow');

	},

	'click .fir_sure_suns': function(ev, template){
		ev.preventDefault();

		// window.scrollTo(0, 0);

		var scroll_height = ($(window).height()/2);

		$("html, body").animate({ scrollTop: scroll_height + "px"}, 'slow');

	}
});