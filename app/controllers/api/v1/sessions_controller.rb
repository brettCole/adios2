class Api::V1::SessionsController < ApplicationController

  def login
    user = User.find_by(email: params[:password])
    if user && user.authenticate(params[:password])
      render json: { token: Auth.createToke(user)}
    else
      render json: { errors: { message: "Unable to find a user with that email or password" } }, status: 500
    end
  end

end