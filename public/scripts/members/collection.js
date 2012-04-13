define([], function() {
	return Backbone.Collection.extend({
		url: 'members',
    initialize: function() {
      // Assign the Deferred issued by fetch() as a property
      this.deferred = this.fetch();
    }
    
	});
});
