require('app/core');

var router =  Em.Router.create({
	location: 'hash',
	enableLogging: true,
	root: Em.Route.extend({
		index: Ember.Route.extend({
			route: '/',
			connectOutlets: function(router) {
				router.get('applicationController').connectOutlet({
					outletName: 'sidebar',
					name: 'members'
				});
				router.get('applicationController').connectOutlet({
					outletName: 'content',
					name: 'calendar'
				});
			}
		})
	})
});
App.store = DS.Store.create({
	revision: 4,
	adapter: DS.RESTAdapter.create({ bulkCommit: false })
});

 

App.ApplicationController = Em.ArrayController.extend();
App.MainController = Em.ArrayController.extend();

App.ApplicationView = Em.View.extend({
	templateName: 'application'
});

App.MembersView = Em.View.extend({
	templateName: 'member-list'
});

App.CalendarView =  Em.View.extend({
	templateName: 'calendar'
});
App.CalendarController = Em.ArrayController.extend({

});


App.EventsView =  Em.View.extend({
	templateName: 'event-list'
});




App.Member = DS.Model.extend({
	image_url: DS.attr('string')
});

App.members = App.store.findAll(App.Member);


App.Event = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string')
});

App.events = App.store.findAll(App.Event);

App.MembersController = Em.ArrayController.extend({
  contentBinding: 'App.members'
});

App.EventsController = Em.ArrayController.extend({
  contentBinding: 'App.events'
});
App.eventsController = App.EventsController.create();



App.initialize(router);










