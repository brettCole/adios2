require 'Auth'

class Api::V1::SessionsController < ApplicationController

  def login
    user = User.find_by(email: params[:password])
    if user && user.authenticate(params[:password])
      render json: { token: Auth.create_token({ id: user.id, username: user.username, name: user.name, email: user.email }) }
    else
      render json: { errors: { message: "Unable to find a user with that email or password" } }, status: 500
    end
  end

end