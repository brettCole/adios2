class Item < ApplicationRecord
  belongs_to :checklist

  validates :item, :checklist_id, presence: true
end