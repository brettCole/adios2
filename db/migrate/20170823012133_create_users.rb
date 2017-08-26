class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :name
      t.string :email
      t.string :password_digest

      #Omniauth params
      t.string :provider
      t.string :uid, limit: 8

      t.timestamps
    end
  end
end
