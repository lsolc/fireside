define(
  [
    'events/model',
    'events/collection',
    'events/detail_view',
    'events/list_view'
  ], 
  function(Event, Events, EventDetailView, EventListView) {
    var AppRouter = Backbone.Router.extend({
      routes: {
        '': 'dashboard',
        'events/new': 'newEvent',
        'events/:id': 'editEvent'
      },
      dashboard: function() {
        App.layout.render();
        var event_list = new Events();
        event_list.fetch({ 
          success: function() {
            var event_list_view = new EventListView({list: event_list});
            App.layout.current_day.show(event_list_view);
          }
        });
      },
      newEvent: function() {
		    var new_event_view = new EventDetailView({ model: new Event()});	
		    App.layout.detail_form.show(new_event_view);
      },
      editEvent: function(id) {
        
      }
    });
    return AppRouter;
  });

