class AddListingsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :listings, :text, array: true, default: []
  end
end
