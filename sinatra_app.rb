require 'json'
require 'date'
require 'sinatra/base'

class SinatraApp < Sinatra::Base

  def items
    result = []
    4.times do |i|
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
    { events: result }
  end

  get '/' do
    File.read(File.join('public', 'index.html'))
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
    {:members => [
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
        :display_name => 'Anezka',
        :image_url => 'anezka.png'
      },
      {
        :id => 3,
        :display_name => 'Hynek',
        :image_url => 'hynek.png'
      },

      {
        :id => 4,
        :display_name => 'Vitek',
        :image_url => 'vitek.png'
      }
    ]}.to_json
  end  
end
