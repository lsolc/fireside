

// App.store = DS.Store.create({
//   revision: 4,
//   adapter: DS.RESTAdapter.create({ bulkCommit: false })
// });



// App.CalEvent = DS.Model.extend({
//   title: DS.attr('string'),
//   description: DS.attr('string')
// });



// App.Member  = DS.Model.extend({});

// App.calEventsController = App.store.findAll(App.CalEvent);

// App.membersController = App.store.findAll(App.Member);



// App.MainView = Em.View.extend({
//   templateName: 'main'
// });




// App.CalEventsView = Em.CollectionView.extend({
//   contentBinding: 'App.calEventsController.content',
//   itemViewClass: Em.View.extend({
//     templateName: 'calEvent-listItem'
//   })
// });



App = Em.Application.create({});
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
  templateName: 'events'
});

App.EventsController = Em.ArrayController.extend({
  });


App.MembersController = Em.ArrayController.extend({
  });



App.initialize(router);











>>>>>>> ember
