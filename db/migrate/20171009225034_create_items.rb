class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :title
      t.belongs_to :checklist, index: true
    end
  end
end
