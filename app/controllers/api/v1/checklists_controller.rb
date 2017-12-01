class Api::V1::ChecklistsController < ApplicationController
  before_action :authenticate_user

  def index
    if current_user
      user = User.find_by(:id => params[:user_id].to_i)
      checklist = user.checklists.all
      render json: checklist, include: [:items], only: [:title, :id], status: 200
    else
      redirect "http://localhost:3000/login"
      render json: { errors: checklist.errors.full_messages }, status: 500
    end
  end

  def create
    checklist = Checklist.new(checklist_params)
    if checklist.valid? && checklist.save
      render json: checklist, only: [:title], status: 200
    else
      render json: { errors: checklist.errors.full_messages }, status: 500
    end
  end

  private

  def checklist_params
    params.require(:checklist).permit(:title, :user_id)
  end

end