define(
	[
	],

	function() {
		window.App = Em.Application.create();

		App.CalEvent  = Ember.Resource.extend({
			resourceUrl:        '/events',
			resourceName:       'event',
			resourceProperties: ['title', 'description']
		});
		App.Member  = Ember.Resource.extend({
			resourceUrl:        '/members',
			resourceName:       'member'
		});
		

		App.membersController = Ember.ResourceController.create({
			resourceType: App.Member
		});
		App.calEventsController = Ember.ResourceController.create({
			resourceType: App.CalEvent
		});
		

		App.MainView = Em.View.extend({
			templateName: 'main',
			newEvent: function(event) {
				//App.MembersFormView.create().appendTo('.detail_form');
				//App.detailFormContainer.get('childViews').pushObject(App.MembersFormView.create())
				alert('New Event...');
			}
		});
		App.MembersView = Em.CollectionView.extend({
			contentBinding: 'App.membersController.content',
			itemViewClass: Em.View.extend({
				templateName: 'member-listItem'
			})
		});
		
		App.MembersFormView =  Em.View.extend({
			templateName: 'member-form'			
		});
		
		/*
		App.detailFormContainer = Em.ContainerView.create({
			childViews: [],
			member_form: App.MembersFormView.create()
		});	
		//App.detailFormContainer.get('childViews').removeObject(App.detailFormContainer.get('member_form'))	
		App.detailFormContainer.get('childViews').pushObject(App.MembersFormView.create())		
		*/
		

		App.CalEventsView = Em.CollectionView.extend({
			contentBinding: 'App.calEventsController.content',
			itemViewClass: Em.View.extend({
				templateName: 'calEvent-listItem'
			})
		});

		$.when(App.calEventsController.findAll(), App.membersController.findAll()).then(function() {
			console.log(App.calEventsController.content);
			console.log(App.membersController.content);
			App.MainView.create().append();
			
			/*
			App.detailFormContainer.appendTo('.detail_form');
			//App.MembersFormView.create().appendTo('.detail_form');
			*/
			
		});
    
		App.HomeState = Em.State.extend({
			route: "/",
			setupContext: function(manager) {
				manager.set('currentView', App.CalEventsView.create({
					controller: manager.get('calEventsController')
				}));
			}
		});
		App.stateManager = Ember.StateManager.create({
			start: App.HomeState
		});    
		App.stateManager.getPath('currentState.name');
	}
);
