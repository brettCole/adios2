Rails.application.routes.draw do

  post 'user_token' => 'user_token#create'

  post '/homeaway_connect' => 'searches#homeaway_connect'

  namespace :api do
    namespace :v1 do
      post '/register' => 'users#create'
      resources :users
      
      post '/create_checklist' => 'checklists#create'
      get '/checklists' => 'checklists#index'
      get '/checklist' => 'checklists#show'

      post '/create_item' => 'items#create'

      post '/email' => 'emails#create'
            
      mount Knock::Engine => '/knock'
    end
  end
end
