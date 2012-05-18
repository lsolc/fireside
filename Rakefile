desc "Find and combine all *.handlebars files into one templates file 'all.html'"


namespace :hbs do
  HBS_DIR = 'public/scripts/templates/'
  HBS_OUTPUT_FILE = "#{HBS_DIR}all.dev.js"
  HBS_LAYOUT_FILE = 'public/index.tmpl'
  HBS_LAYOUT_OUTPUT_FILE = 'public/index.html'
  HBS_SOURCE_TEMPLATE = <<-DOC
  
    <script type="text/x-handlebars" rel="{{file_name}}" data-template-name="{{key}}">
      {{content}}
    </script>    
  DOC
  
  def compose(f)
    file_name = f.gsub( /#{HBS_DIR}/, '')
    key = file_name.gsub(/\//, '-').gsub(/\.handlebars/, '')
    content = File.read(f)
    HBS_SOURCE_TEMPLATE.gsub(/{{key}}/, key).gsub(/{{content}}/, content).gsub(/{{file_name}}/, f)
  end

  task :build  do
    output = ""
    templates = Dir.glob("#{HBS_DIR}**/*.handlebars")
    templates.each do |f|
      output << compose(f) + "\n\n"
    end
    layout = File.read(HBS_LAYOUT_FILE)
    File.open(HBS_LAYOUT_OUTPUT_FILE, 'w') { |f| f.write layout.gsub('{{HBS}}', output ) }
    puts "All Handlebars templates were injected into file '#{HBS_LAYOUT_OUTPUT_FILE}'"
  end
end

task :build => [ 'hbs:build' ]
task :default => :build


