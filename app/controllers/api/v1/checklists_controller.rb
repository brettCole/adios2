class Api::V1::ChecklistsController < ApplicationController
  before_action :authenticate_user

  def index
    checklist = Checklist.all
    render json: checklist, status: 200
  end

  def create
    checklist = Checklist.new(checklist_params)
    if checklist.valid? && checklist.save
      render json: checklist, status: 200
    else
      render json: { errors: user.errors.full_messages }, status: 500
    end
  end

  private

  def checklist_params
    params.require(:checklist).permit(:title, :user_id)
  end

end