Em.TEMPLATES['event-listItem'] = Ember.Handlebars.compile("<section class=\"event_item full\" data-next-state=\"partial\" data-id=\"{{id}}\">\n\t<header>\n\t\t<section class=\"top_panel \">\n\t\t\t<span class=\"time_panel \">\n\t\t\t\t<span class=\"time\">Mon, June 11, 14:00</span>\n\t\t\t\t<span class=\"duration\">5 hours</span>\n\t\t\t</span>\t\n\t\t\t<section class=\"action_panel\">\n\t\t\t\t<a href=\"#/events/{{id}}\"><img src=\"/images/icons/edit.png\" alt=\"Edit\"></a>\n\t\t\t\t<img src=\"/images/icons/delete.png\" alt=\"Delete\" />\n\t\t\t</section>\t\t\n\t\t</section>\n\t\t<section class=\"title\">\t\t\n\t\t\t{{title}}\n\t\t</section>\n\t</header>\n\t<section class=\"details_panel\">\t\n\t\t<img src=\"/images/lida.png\" alt=\"person photo\" />\n\t\t<img src=\"/images/pepa.png\" alt=\"person photo\" />\n\t\t{{description}}\n\t</section>\t\n</section>  \n\n");

