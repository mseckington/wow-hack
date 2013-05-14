def xr(partial, locals = {})
    Haml::Engine.new(File.read("./layouts/.xander-haml/#{partial}.html.haml")).render(Object.new, locals)
end
