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

    App.calEventsController = Ember.ResourceController.create({
      resourceType: App.CalEvent
    });

    calEvents = App.calEventsController;
    App.MainView = Em.View.extend({
      templateName: 'main'
    });


    App.CalEventsView = Em.CollectionView.extend({
      contentBinding: 'App.calEventsController.content',
      itemViewClass: Em.View.extend({
        templateName: 'calEvent-listItem'
      })
    });



    $.when(App.calEventsController.findAll()).then(function() {
      console.log(App.calEventsController.content);
      App.MainView.create().append();
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
