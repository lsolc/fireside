Em.TEMPLATES['application'] = Ember.Handlebars.compile("<section class=\"navigation\">\n  {{outlet nav}}\n</section>\n\n<section class=\"sidebar\">\n    {{outlet sidebar}}\n</section>\n\n<section class=\"content\">\n  {{outlet content}}\n</section>\n\n\n\n\n");

