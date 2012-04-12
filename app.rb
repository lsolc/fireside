require 'rubygems' 
require 'sinatra'
require 'json'
require 'date'

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

