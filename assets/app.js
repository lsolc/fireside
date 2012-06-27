
loader.register('app/core', function(require) {
require('jquery');
require('ember');
require('ember-data');
require('app/ext');
require('app/templates');

Ember.ENV.CP_DEFAULT_CACHEABLE = true;
Ember.ENV.VIEW_PRESERVES_CONTEXT = true;

App = Ember.Application.create({
  VERSION: '0.1'
});


});

loader.register('app/ext', function(require) {


});

loader.register('app/main', function(require) {
require('app/core');

var router =  Em.Router.create({
	location: 'hash',
	enableLogging: true,
	root: Em.Route.extend({
		index: Ember.Route.extend({
			route: '/',
			connectOutlets: function(router) {
				router.get('applicationController').connectOutlet({
					outletName: 'nav',
					name: 'navigation'
				});
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
App.MainController = Em.ArrayController.extend(); // ???

App.NavigationView = Em.View.extend({
	templateName: 'navigation'
});

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

<<<<<<< HEAD
App.NavigationController = Em.ArrayController.extend({});
App.EventsController = Em.ArrayController.extend({

=======

App.EventsView =  Em.View.extend({
	templateName: 'event-list'
>>>>>>> b83d7c1223a9dfa872d970cdbcd08c550dedb235
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











});

loader.register('app/view_helpers/should_be_selected', function(require) {
define(
	[
	], 
	function() {

		Handlebars.registerHelper('should_be_selected', function(current_member, selected_members) {
			if (!selected_members) {
				selected_members = [];
			}						
			if (_.include(selected_members, current_member.id)) {
				return "selected";
			} 
			return "";					
		});							

	}
);

});

loader.register('app/view_helpers/show_hours', function(require) {
define(
	[
	], 
	function() {

		Handlebars.registerHelper('show_hours', function(selected) {
			var i, sel, res = "";
			for (i=0; i<24; i++) {
				if (selected === i) {
					sel = 'selected="selected"';
				}
				else {
					sel = "";
				}						
				res += '<option ' + sel + ' value="' + i + '">' + i + '</option>\n';
			}
			return new Handlebars.SafeString(res);				
		});					

	}
);

});

loader.register('app/view_helpers/show_minutes', function(require) {
define(
	[
	], 
	function() {

		Handlebars.registerHelper('show_minutes', function(selected) {
			var i, sel, res = "";				
			for (i=0; i<60; i += 5) {						
				if (selected === i) {
					sel = 'selected="selected"';
				}
				else {
					sel = "";
				}
				res += '<option ' + sel + ' value="' + i + '">' + i + '</option>\n';						
			}		
			return new Handlebars.SafeString(res);	
		});		

	}
);

});
