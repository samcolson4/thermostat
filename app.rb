require 'sinatra'

class Thermostat < Sinatra::Base

  before do
    content_type :json    
    headers 'Access-Control-Allow-Origin' => '*', 
            'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']  
  end

  get '/' do
    "hello, temperature API"
  end

  get '/temp' do
    File.read('./temp.json')
  end

  post '/temp' do
    File.write('./temp.json')
  end

end