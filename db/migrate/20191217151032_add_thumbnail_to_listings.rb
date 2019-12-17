class AddThumbnailToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :thumbnail, :string, null: false, default: 'default'
  end
end
