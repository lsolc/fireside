define(
	[
	], 
	function() {

		Handlebars.registerHelper('show_minutes', function(selected) {
			var i, sel, res = "";				
			for (i=0; i<60; i += 5) {						
				if (selected === i) {
					sel = 'selected="selected"';
				}
				else {
					sel = "";
				}
				res += '<option ' + sel + ' value="' + i + '">' + i + '</option>\n';						
			}		
			return new Handlebars.SafeString(res);	
		});		

	}
);
