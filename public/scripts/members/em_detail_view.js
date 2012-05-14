define ([
	],
	function () {
		
		return Ember.View.extend({
			templateName: 'em_member_form',
			
			create_member: function(event) {
				var val = $('#name').val();
				this.set('name', val);	
				alert(this.get('name'));	
				
				
				//event.view.set('name', val);				
				//alert(event.view.get('name'));				
			}
		});
	}
);