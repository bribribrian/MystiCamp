class FixAmenitiesColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :amenities, :type
    add_column :amenities, :name, :string
  end
end
