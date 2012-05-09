define([
	'hbs!template/members/members'
	],
	function(template){
		return Backbone.View.extend({
			events: {},
			initialize: function() {
				this.template = template;
			},
			render: function() {
				var that = this;
				App.current_members = App.members;
				
				App.current_members.deferred.done(function(data) {
					$(that.el).html(that.template({display_members: data}));
				});
				return this;
			}
		});
	}
);
