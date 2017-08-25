class Api::V1::UsersController < ApplicationController

  def register
    user = User.new(user_params)
    if user.save
      render json: { token: Auth.createToken({ id: user.id, username: user.username, name: user.name, email: user.email }) }
    else
      render json: { errors: user.errors.full_messages }, status: 500
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :name, :email, :password, :password_confirmation)
  end

end