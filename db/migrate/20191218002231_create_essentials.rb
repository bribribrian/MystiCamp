class CreateEssentials < ActiveRecord::Migration[5.2]
  def change
    create_table :essentials do |t|
      t.string :name, null: false
      t.timestamps
    end
    add_index :essentials, :name
  end
end
