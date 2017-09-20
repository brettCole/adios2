Rails.application.routes.draw do

  post 'user_token' => 'user_token#create'
  namespace :api do
    namespace :v1 do
      post '/register', to: 'users#register'
      post '/login', to: 'sessions#create'
    end
  end
end
