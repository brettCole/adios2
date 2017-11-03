class Api::V1::EmailsController < ApplicationController
  def create
    email = Email.new(email_params)
    if email.vali? && email.save
      render status: 200
    else
      render json: { errors: email.errors.full_messages }, status: 500
    end
  end

  private

  def email_params
    params.require(:email).permit(:email)
  end
end