app_name = 'fireside'

require 'colored'
require 'rake-pipeline'

task :default => :build


def pipeline
  Rake::Pipeline::Project.new('Assetfile')
end

def build
  pipeline.invoke
end


desc "Build 'app' and deploy files into 'assets' folder"
task :build do
  build
end

namespace :sass do
  desc "Compiles app/css/app.scss -> app/css/app.css "
  task :app do
    `sass app/css/app.scss app/css/app.css --compass`
    build
  end
   desc "Compiles app/css/bootstrap.scss -> app/css/bootstrap.css "
  task :bootstrap do
    `sass app/css/bootstrap.scss app/css/bootstrap.css`
    build
  end
end

task :run do
  `bundle exec rackup -p 3000`
end

namespace :em do
  task :update do
    puts 'Building ember.js ...'
    puts `cd ../ember.js/ && git pull && rake && cp dist/ember.js ../fireside/public/scripts/lib/base`
    puts 'Building ember-data'
    puts `cd ../ember-data/ && git pull && rake && cp dist/ember-data.js ../fireside/public/scripts/lib/base`
  end
end


desc "Run tests with PhantomJS"
task :test => :build do
  unless system("which phantomjs > /dev/null 2>&1")
    abort "PhantomJS is not installed. Download from http://phantomjs.org/"
  end

  cmd = "phantomjs tests/run-tests.js \"file://#{File.dirname(__FILE__)}/tests/index.html\""

  # Run the tests
  puts "Running #{app_name} tests"
  success = system(cmd)

  if success
    puts "Tests Passed".green
  else
    puts "Tests Failed".red
    exit(1)
  end
end



