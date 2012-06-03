define(
	[
	], 
	function() {
		Em.RouteManager.extend({
			events: Em.ViewState.create({
				route: 'events', 
				view: MyApp.postsView,
				index: Em.State.create({}), // default state

				show: Em.State.create({
					route: ':id', // defines a nested dynamic route
					enter: function(stateManager, transition) {
						this._super(stateManager, transition);
						var params = stateManager.get('params');
						var postId = params.id;
						// do something here with postId
					}
				})
			}),

			projects: Em.ViewState.create({
				route: 'projects',
				view: MyApp.projectsView
			}
		)
	}
);

