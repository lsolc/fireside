define([
	'text!templates/events/partial_detail.tmpl', 
	'text!templates/events/full_detail.tmpl'
	], 
	function(events_partial_detail_text, events_full_detail_text) {
		return Backbone.View.extend({
			events: {
				'click .event_item > header': 'toggle_template'
			},
			initialize: function() {
				this.partial_template = Handlebars.compile(events_partial_detail_text);
				this.full_template = Handlebars.compile(events_full_detail_text);
				return this.list = this.options.list;
			},
			render: function(model, state) {
				var html_string;
				html_string = this[state + '_template'](model.attributes);
				return $(this.el).replaceWith(html_string);
			},
			toggle_template: function(e) {
				var data, item_el, model;
				item_el = $(e.currentTarget).closest('.event_item');
				data = item_el.data();
				model = this.list.get(data.id);
				this.el = item_el;
				return this.render(model, data.nextState);
			}
		});
	}
);
	
