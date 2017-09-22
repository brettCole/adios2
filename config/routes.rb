Rails.application.routes.draw do

  post 'user_token' => 'user_token#create'
  namespace :api do
    namespace :v1 do
      post '/register', to: 'users#create'
      post '/login', to: 'sessions#create'

      mount Knock::Engine => '/knock'
    end
  end
end
