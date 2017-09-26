Rails.application.routes.draw do

  post 'user_token' => 'user_token#create'
  namespace :api do
    namespace :v1 do
      post '/register' => 'users#create'
      resources :categories
      
      mount Knock::Engine => '/knock'
    end
  end
end
