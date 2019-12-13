class RemoveListingsFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :listings, :text
  end
end
