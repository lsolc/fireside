define([
	'hbs!template/events/list',
	'events/model',
	'members/collection',
	'events/collection',
	'events/detail_view'
	
	
	], 
	function(event_list_template, Event, Members, Events, EventView) {
		return Backbone.View.extend({
			initialize: function() {
				this.template = event_list_template;
				this.list = this.options.list;
			},
			render: function() {
				var html_string, many_items;
				many_items = this.list.length > 2;
				html_string = this.template({events: this.list.toJSON(), many_items: many_items});
				$(this.el).html(html_string);
				return this;
			}
		});
	}
);
	
