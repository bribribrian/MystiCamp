class CreateTerrains < ActiveRecord::Migration[5.2]
  def change
    create_table :terrains do |t|
      t.string :name, null: false
      t.timestamps
    end
    add_index :terrains, :name
  end
end
