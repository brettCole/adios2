class Item < ApplicationRecord
  belongs_to :checklist

  validates :title, :checklist_id, presence: true
end