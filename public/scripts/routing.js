define(
	[
	'events/model',
	'events/collection',
	'events/detail_view',
	'events/list_view',
	'events/show_view'
	], 
	function(Event, Events, EventDetailView, EventListView, EventShowView) {
		var renderEvent = function(model) {
			var edit_event_view = new EventDetailView({ model: model});
			App.layout.detail_form.show(edit_event_view);     
		}
		var AppRouter = Backbone.Router.extend({
			routes: {
				'': 'dashboard',
				'events/new': 'newEvent',
				'events/:id': 'editEvent'
			},
			dashboard: function() {
				App.layout.render();
				App.current_event_list = new Events();
				App.current_event_list.fetch({ 
					success: function() {
						var event_list_view = new EventListView({list: App.current_event_list});
						App.layout.current_day.show(event_list_view);
					}
				});
			},
			newEvent: function() {
				var new_event_view = new EventDetailView({ model: new Event()});	
				App.layout.detail_form.show(new_event_view);
			},
			editEvent: function(id) {
				var model;
				if (App.current_event_list) {
					model = App.current_event_list.get(id);
					renderEvent(model);				
				}
				else {
					model = new Event({id: id});
					model.fetch({ 
						success: function() {
							renderEvent(model);
						}
					});
				}
			}
		});
		return AppRouter;
	}
);

