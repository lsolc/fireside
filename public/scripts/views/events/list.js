define([
	'text!templates/events/partial_detail.tmpl', 
	'text!templates/events/full_detail.tmpl', 
	'text!templates/events/list.tmpl',
	
	'models/event',
	'collections/members',
	'collections/events',
	'views/events/event'
	
	
	], 
	function(events_partial_detail_text, events_full_detail_text, events_list_text, Event, Members, Events, EventView) {
		return Backbone.View.extend({
			//el: '#events .current #list',
			el: '#index .current_day .current',
			events: {
				'click button.edit': 'edit_event'
			},
			initialize: function() {
				Handlebars.registerPartial('partial_detail', events_partial_detail_text);
				Handlebars.registerPartial('full_detail', events_full_detail_text);
				this.template = Handlebars.compile(events_list_text);
				this.list = this.options.list;
			},
			render: function() {
				var html_string, many_items;
				many_items = this.list.length > 2;
				html_string = this.template({events: this.list.toJSON(), many_items: many_items});
				$(this.el).html(html_string);
				return this;
			},
			edit_event: function(e) {
				var button = $(e.target);
				var id = button.data('id');
				var model = this.list.get(id);
				var members = new Members();
				var edit_event_view = new EventView({el: '#index .content', model: model, members: members});
				members.fetch({
					success: function() {
						edit_event_view.render();
					}
				});
				//Najdu model
				//nahraji members
				//vyrenderuji view
				//debugger;
			}
		});
	}
);
	
