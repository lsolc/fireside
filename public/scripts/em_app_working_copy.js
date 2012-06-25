define(
	[
	],
	function() {
		window.App = Ember.Application.create({
			Router: Ember.Router.extend({
				location: 'hash',
				enableLogging: true,
				root: Em.Route.extend({
					index: Em.Route.extend({
						route: '/',
						redirectsTo: 'main',
					}),
					main: Ember.Route.extend({
						route: '/sajhdgasjhdgajsh',
						connectOutlets: function(router) {
							console.log(router.getPath('currentState.path'));
							//debugger;
							Ember.ArrayController.create().connectOutlet('App.MainView');	
							//router.get('applicationController').connectOutlet(App.MainView);				
						}
					})					
				})							
			})		
		});	git 
		
		
		App.initialize();
		App.get('stateManager') // an instance of App.Router    ?????????

		App.CalEvent  = Ember.Resource.extend({
			resourceUrl:        '/events',
			resourceName:       'event',
			resourceProperties: ['title', 'description']
		});
		/*
		App.Member  = Ember.Resource.extend({
			resourceUrl:        '/members',
			resourceName:       'member'
		});	
				
		App.membersController = Ember.ResourceController.create({
			resourceType: App.Member
		});
		*/
		
		
		App.membersController = Ember.ArrayController.create();
		$.get('members', function(data) {
			App.membersController.set('content', data);
		});
		
		App.applicationController = Ember.ArrayController.create();
		
		
		App.calEventsController = Ember.ResourceController.create({
			resourceType: App.CalEvent
		});
		

		App.MainView = Em.View.extend({
			templateName: 'main'			
		});
		App.Application = Em.View.extend({
			templateName: 'application'
		});
		
		
		App.MembersView = Em.CollectionView.extend({
			contentBinding: 'App.membersController.content',
			itemViewClass: Em.View.extend({
				templateName: 'member-listItem'
			})
		});
		App.CalEventsView = Em.CollectionView.extend({
			contentBinding: 'App.calEventsController.content',
			itemViewClass: Em.View.extend({
				templateName: 'calEvent-listItem'
			})
		});
		

	$.when(App.calEventsController.findAll()/*, App.membersController.findAll()*/).then(function() {
		//console.log(App.calEventsController.content);
		//console.log(App.membersController.content);
		//App.MainView.create().append();	
		//App.Application.create().append();	
		
		
		//App.initialize(router);
		//App.get('stateManager');
	});		
});
