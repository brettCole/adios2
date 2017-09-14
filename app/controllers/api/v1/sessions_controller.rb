require 'Auth'

class Api::V1::SessionsController < ApplicationController

  def create
    user = User.find_by(email: auth_params[:email])
    if user && user.authenticate(auth_params[:password])
      render json: { token: Auth.create_token({ id: user.id }) }
    else
      render json: { errors: { message: "Unable to find a user with that email or password" } }, status: 500
    end
  end

  private 

  def auth_params
    params.require(:auth).permit(:email, :password)
  end

end