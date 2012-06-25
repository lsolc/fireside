
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
