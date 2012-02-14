(function() {

  define(['models/event'], function(Event) {
    return Backbone.Collection.extend({
      url: 'events',
      model: Event
    });
  });

}).call(this);
