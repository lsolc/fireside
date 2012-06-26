notification :growl

guard :rake, :task => :build do
  watch(%r{^app/.+\.(js|handlebars)$} )
  watch(%r{^app/static/.*$})

end

guard :rake, :task => 'sass:bootstrap' do
  watch(%r{^app/css/bootstrap.*\.scss$})
end

guard :rake, :task => 'sass:app' do
  watch(%r{^app/css/.*\.scss$})
end






