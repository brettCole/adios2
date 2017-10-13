class Api::V1::ItemsController < ApplicationController
  before_action :authenticate_user

  def index
    item = Item.all
    render json: item, only: [:item, :checklist_id], status: 200
  end

  def create
    item = Item.new(item_params)
    if item.valid? && item.save
      render json: item, status: 200
    else
      render json: { errors: user.errors.full_messages }, status: 500
    end
  end

  private

  def item_params
    params.require(:item).permit(:item, :checklist_id)
  end
end