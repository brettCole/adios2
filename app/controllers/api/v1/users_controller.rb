class Api::V1::UsersController < ApplicationController

  def create
    user = User.new(user_params)
    if user.valid? && user.save
      token = Knock::AuthToken.new(payload: { sub: user.id })
      render json: token, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: 500
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :name, :email, :password, :password_confirmation)
  end
  
end