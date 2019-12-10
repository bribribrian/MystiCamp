class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :f_name, default: ""
      t.string :l_name, default: ""
      t.string :email, null: false
      t.float :lat, default: 40.7829
      t.float :lng, default: 73.9654
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
