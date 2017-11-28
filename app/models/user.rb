class User < ApplicationRecord
  has_secure_password

  has_many :checklists

  validates :name, :username, :email, presence: true
  validates :username, :email, uniqueness: true

end
