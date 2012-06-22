require 'rubygems' 
require 'sinatra'
require 'json'
require 'date'

mime_type :tmpl, "text/plain"
mime_type :hbs, "text/x-handlebars-template"
mime_type :handlebars, "text/x-handlebars-template"

def items
  result = []
  2.times do |i|
    result << {
      :id => i,
      :from_date => Date.today,
      :from_hours => 9,
      :from_minutes => 45,
      :members => [1, 2],
      :duration_minutes => 60,
      :duration_hours => 4,
      :title => "Vyzvednout Hynka ze skolky, Vyzvednout Hynka ze skolky, Vyzvednout Hynka ze skolky #{i}",      
      :description => "Na zpatecni ceste dojit na postu a nakoupit\nNa zpatecni ceste dojit na postu a nakoupit\nNa zpatecni ceste dojit na postu a nakoupit\nNa zpatecni ceste dojit na postu a nakoupit\nNa zpatecni ceste dojit na postu a nakoupit",
    }
  end
  { cal_events: result }
end

get '/' do
  File.read(File.join('public', 'index.html'))
end

get '/cal_events/:id' do
  content_type 'application/json', :charset => 'utf-8'
  items[params[:id].to_i].to_json
end

get '/cal_events' do
  content_type 'application/json', :charset => 'utf-8'
  items.to_json
end

get '/members' do
  content_type 'application/json', :charset => 'utf-8'
  { 
    :members =>
    [
      {
        :id => 0,
        :display_name => 'Pepa',
        :image_url => '/images/pepa.png'
      },
      {
        :id => 1,
        :display_name => 'Lida',
        :image_url => '/images/lida.png'
      },
      {
        :id => 2,
        :display_name => 'Anezka',
        :image_url => '/images/anezka.png'
      }
    ]
  }
end  

