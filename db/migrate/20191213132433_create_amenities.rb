class CreateAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :amenities do |t|
      t.string :type, null: false
      t.timestamps
    end
    add_index :amenities, :type, unique: true
  end
end
