define [], () -> 
	NewEvent = Backbone.Model.extend
		title : 'title'	
		description: ''
		initialize: () -> {}	
	
	
	new_event = new NewEvent({title: "Zajit do servisu", description: "Some text........" })
	$("select").chosen()
	$("select").chosen().change(() -> alert('fired by chosen'))
	
	
	
	
	
	
	
	
	
	
	


	
	