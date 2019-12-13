class AddZipToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :zip, :integer
  end
end
