require 'rubygems' 
require 'sinatra'
require 'json'


get '/events' do

  items = []

  2.times do |i|
    items << {
      :time_range => "16:00 - 18:00",
      :duration => "2h",
      :title => "Vyzvednout Hynka ze skolkyVyzvednout Hynka ze skolkyVyzvednout Hynka ze skolky",      
      :description => "Na zpatecni ceste dojit na postu a nakoupit",
      
      :short_message => "Failure #{i}",
      :full_message => "app/helpers/text_helper.rb:35:in",
      :timestamp => 1291899928,
      :level => "#{i}",
      :file => "/var/www/somefile.rb",
      :line => "356",
      :_user_id => "jkaramon",
      :custom_data => {
        :application => "VanillaDesk",
        :app_version => "1.0.2345",
        :component => "job_server"
      }
    }
  end
  content_type 'application/json', :charset => 'utf-8'
  items.to_json
end
