(function() {

  define(['text!templates/events/new_event.tmpl', 'collections/members'], function(new_event_text, Members) {
    return Backbone.View.extend({
      el: '#new .current',
      id: '#SliderSingle',
      events: {
        'click .from select': 'date_field_changed',
        'click #SliderSingle': 'date_field_changed'
      },
      initialize: function() {
        _.bindAll(this);
        this.template = Handlebars.compile(new_event_text);
        return this.members = this.options.members;
      },
      render: function() {
        var html_string;
        html_string = this.template({
          members: this.members.toJSON(),
          event: this.default_event
        });
        $(this.el).html(html_string);
        this.time_from();
        this.current_date();
        $("select#options").chosen();
        $("#hours").val(this.model.hour_from);
        return this.slider();
      },
      time_from: function() {
        var i, options, options_m, _i, _len, _ref, _results;
        options = "";
        for (i = 1; i <= 23; i++) {
          if (i < 10) i = "0" + i;
          options += "<option value=" + i + ">" + i + "</option>\n";
          $('#hours').html(options);
          options_m = "";
        }
        _ref = ["00", 15, 30, 45];
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          i = _ref[_i];
          options_m += "<option value=" + i + ">" + i + "</option>\n";
          _results.push($('#minutes').html(options_m));
        }
        return _results;
      },
      current_date: function() {
        var date;
        date = new Date();
        return date.getHours();
      },
      slider: function() {
        return jQuery("#SliderSingle").slider({
          from: 5,
          to: 50,
          step: 2.5,
          round: 1,
          format: {
            format: '##.0',
            locale: 'de'
          },
          dimension: '&nbsp;€',
          skin: "round"
        });
      },
      description_changed: function() {
        return alert("description: " + this.get('description'));
      },
      hours_from: function() {
        var hours;
        return hours = $('select#hours :selected').val();
      },
      date_field_changed: function(e) {
        var hours_from;
        hours_from = this.hours_from();
        return console.log(hours_from);
        /*
        			model.minutes_from = this.minutes_from
        			model.duration_secs = this.duration
        			model.recalcute_date_to
        */
      }
    });
  });

}).call(this);
