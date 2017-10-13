Rails.application.routes.draw do

  post 'user_token' => 'user_token#create'
  namespace :api do
    namespace :v1 do
      post '/register' => 'users#create'
      resources :users
      
      post '/create_checklist' => 'checklists#create'
      get '/checklists' => 'checklists#index'
      get '/checklists:id' => 'checklists#show'
            
      mount Knock::Engine => '/knock'
    end
  end
end
