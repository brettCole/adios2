class Api::V1::ItemsController < ApplicationController
  before_action :authenticate_user

  def index
    item = Item.all
    render json: item, only: [:item, :checklist_id], status: 200
  end

  def create
    item = Item.new(item_params)
    if item.valid? && item.save
      render json: item, only: [:item, :id], status: 200
    else
      render json: { errors: item.errors.full_messages }, status: 500
    end
  end

  private

  def found_checklist
    @checklist = Checklist.find_by(:title => params[:item][:checklist_id])
  end

  def item_params
    params.require(:item).permit(:title).merge(:checklist_id => found_checklist.id)
  end
end