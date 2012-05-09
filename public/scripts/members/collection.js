define(['members/model'], function(Member) {
	return Backbone.Collection.extend({
		url: 'members',
		model: Member,
		initialize: function() {
			// Assign the Deferred issued by fetch() as a property
			this.deferred = this.fetch();
		}
	});
});
