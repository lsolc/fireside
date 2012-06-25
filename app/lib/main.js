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
					name: 'events'
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

App.MembersView = Em.CollectionView.extend({
	content: [ { image_url: 'pepa.png' }, { image_url: 'lida.png' }],
	itemViewClass: Em.View.extend({
		templateName: 'member-listItem' 
	})
});

App.EventsView =  Em.View.extend({
	templateName: 'events',
	content: {}
});

App.EventView = Em.CollectionView.extend({
	content: [ { subject: 'Event 1' }, { subject: 'Event 2' }],
	itemViewClass: Em.View.extend({
		templateName: 'event-listItem'
	})
});


App.EventsController = Em.ArrayController.extend({

});




App.Event = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string')
});

App.MembersController = Em.ArrayController.extend({
});

App.initialize(router);











