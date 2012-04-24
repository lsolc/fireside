define(
	[
	], 
	function() {

		Handlebars.registerHelper('show_hours', function(selected) {
			var i, sel, res = "";
			for (i=0; i<24; i++) {
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
