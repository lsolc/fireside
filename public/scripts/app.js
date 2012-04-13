define(
  [
    'routing',
    'layout',
    'members/collection'
  ], 
  function(AppRouter, Layout, Members) {
    App = new Backbone.Marionette.Application();
    App.members = new Members();
    App.addRegions({
      content: "body"
    });
    App.addInitializer( function(options) {
      this.members = new Members();
      this.layout = new Layout({el: 'body'});
      var appRouter = new AppRouter();
      Backbone.history.start();
    });
  }
);
