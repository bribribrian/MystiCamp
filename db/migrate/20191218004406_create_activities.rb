class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.string :name, null: false
      t.timestamps
    end
    add_index :activities, :name
  end
end
