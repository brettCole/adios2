class Api::V1::UsersController < ApplicationController

  def register
    user = User.new(user_params)
    if user.save
      render json: { token: Auth.createToken(user)}
    else
      render json: { errors: users.errors.full_messages }, status: 500
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :name, :email, :password)
  end

end