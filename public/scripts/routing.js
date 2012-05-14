define(
	[
	'events/model',
	'events/collection',
	'events/detail_view',
	'events/list_view',
	'events/show_view',
	
	'members/model',	
	'members/detail_view',
	'members/collection',
	'members/show_view',
	
	'members/em_detail_view',
	'members/em_model'
	], 
	function(Event, Events, EventDetailView, EventListView, EventShowView, Member, MemberDetailView, Members, MemberShowView, EmMemberDetailView, EmMember) {
		var renderEvent = function(model) {
			var edit_event_view = new EventDetailView({ model: model});
			App.layout.detail_form.show(edit_event_view);     
		}
		var AppRouter = Backbone.Router.extend({
			routes: {
				'': 'dashboard',
				'events/new': 'newEvent',
				'events/:id': 'editEvent',
				'members/new': 'newMember',
				'members/:id': 'editMember'
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
				
				var member_show_view = new MemberShowView();
				App.layout.members_section.show(member_show_view);
				
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
			},
			newMember: function() {
				/*
				var new_member_view = new MemberDetailView({ model: new Member()});
				App.layout.detail_form.show(new_member_view);
				*/
				
			
				EmApp.new_member_view = EmMemberDetailView.create();
				$(function() {
					EmApp.new_member_view.appendTo('#index');
				});
				
				
				//EmApp.member = EmMember.create();				
			},
			editMember: function(id) {
				/*
				var model;
				model = App.members.get(id);
				var edit_member_view = new MemberDetailView({ model: model});
				App.layout.detail_form.show(edit_member_view);
				*/
				
				
				/*
				EmApp.memberController = Ember.ArrayController.create();		
				$.get('members', function(data) {
					//EmApp.memberController.set('content', data);
					console.log(data);
				});*/
				
			}
		});
		return AppRouter;
	}
);

