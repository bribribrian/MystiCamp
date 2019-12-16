class AddLatToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :lat, :float, null: false
    add_column :listings, :lng, :float, null: false
  end
end
