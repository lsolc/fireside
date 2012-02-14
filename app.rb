require 'rubygems' 
require 'sinatra'
require 'json'

def items
  result = []
  2.times do |i|
    result << {
      :id => i,
      :time_range => "16:00 - 18:00",
      :duration => "2h",
      :title => "Vyzvednout Hynka ze skolky, Vyzvednout Hynka ze skolky, Vyzvednout Hynka ze skolky",      
      :description => "Na zpatecni ceste dojit na postu a nakoupit\nNa zpatecni ceste dojit na postu a nakoupit\nNa zpatecni ceste dojit na postu a nakoupit\nNa zpatecni ceste dojit na postu a nakoupit\nNa zpatecni ceste dojit na postu a nakoupit",
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
  result
end

get '/events/:id' do
  content_type 'application/json', :charset => 'utf-8'
  items[params[:id].to_i].to_json
end

get '/events' do
  content_type 'application/json', :charset => 'utf-8'
  items.to_json
end

get '/members' do
  content_type 'application/json', :charset => 'utf-8'
  [
    {
      :id => 0,
      :display_name => 'Pepa',
      :image_url => 'pepa.png'
    },
    {
      :id => 1,
      :display_name => 'Lida',
      :image_url => 'lida.png'
    },
    {
      :id => 2,
      :display_name => 'Lada',
      :image_url => 'lada.png'
    }
    ].to_json
end  

