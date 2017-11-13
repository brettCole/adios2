class Checklist < ApplicationRecord
  belongs_to :user
  has_many :items, dependent: :destroy

  validates :title, :user_id, presence: true
  validates :title, uniqueness: true
end