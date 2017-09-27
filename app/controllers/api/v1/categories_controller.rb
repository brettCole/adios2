class Api::V1::CategoriesController < ApplicationController

  def create
    category = Category.new(category_params)
    if category.valid? && category.save
      render 'created successfully'
    else
      render 'whoops'
    end
  end

  private

  def category_params
    params.require(:category).permit(:title)
  end
end