D3::Application.routes.draw do
  root :to => 'data#start'
  get '/districts' => 'data#districts'

end

