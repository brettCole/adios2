class Api::V1::ItemsController < ApplicationController
  before_action :authenticate_user

  def index
    item = Item.all
    render json: item, only: [:item, :checklist_id], status: 200
  end

  def create
    # Find checklist first then use that id to corrolate the two
    binding.pry
    item = Item.new(item_params)
    if item.valid? && item.save
      render json: item, only: [:item, :id], status: 200
    else
      render json: { errors: user.errors.full_messages }, status: 500
    end
  end

  private

  def item_params
    params.require(:item).permit(:title, :checklist_id)
  end
end