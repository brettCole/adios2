class Api::V1::CategoriesController < ApplicationController

  def create

  end

  private

  def category_params
    params.require(:category).permit(:title)
  end
end