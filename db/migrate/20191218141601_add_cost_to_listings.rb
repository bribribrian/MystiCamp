class AddCostToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :cost, :decimal,  :precision => 8, :scale => 2, null: false
    add_column :listings, :lodging, :string, null: false
    add_column :listings, :num_sites, :integer, null: false
    add_column :listings, :max_guests, :integer, null: false
  end
end
