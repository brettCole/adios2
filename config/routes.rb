Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      post '/register', to: 'users#register',
      post '/login', to: 'sessions#login'
    end
  end
end
