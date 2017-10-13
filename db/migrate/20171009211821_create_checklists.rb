class CreateChecklists < ActiveRecord::Migration[5.0]
  def change
    create_table :checklists do |t|
      t.string :title
      t.belongs_to :user, index: true
    end
  end
end
