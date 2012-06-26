require 'rack'
require 'rack/contrib/try_static'
require 'rack/contrib/not_found'
require 'rake-pipeline'
require 'rake-pipeline/middleware'
load 'sinatra_app.rb'

use Rack::TryStatic,
    :root => "assets",
    :urls => %w[/],
    :try => ['.html', 'index.html', '/index.html']

run SinatraApp 

# run Rack::NotFound.new './assets/404.html'

