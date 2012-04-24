define(
	[
	'hbs!template/layout'
	], 
	function(layout_template) {
		return Backbone.Marionette.Layout.extend({
			template: layout_template,

			regions: {
				//current_day: ".current_day > .current",
				current_day: ".current_day > .current, .past_events, .next_day, .future",
				detail_form: ".detail_form"
			},

			initialize: function(){
			}
		});

	}
);
