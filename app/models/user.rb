class User < ApplicationRecord
  has_secure_password

  validates :name, :username, :email, presence: true
  validates :username, :email, uniqueness: true
  validates_format_of :email, with: /@/

  # Create User with auth value from Facebook or Google
  def self.sign_in_with_auth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth['info']['name']
      user.email = auth['info']['email']
      user.password = SecureRandom.hex
      user.save!
    end
  end

end
