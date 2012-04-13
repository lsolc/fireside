define(
  [
    ], 
  function() {

    Handlebars.registerHelper('should_be_selected', function(current_member, selected_members) {
      if (!selected_members) {
        selected_members = [];
      }						
      if (_.include(selected_members, current_member.id)) {
        return "selected";
      } 
      return "";					
    });							

  }
);
