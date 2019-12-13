class CreateListingJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :listing_joins do |t|
      t.integer :listing_id, null: false
      t.integer :attributable_id, null: false
      t.string :attributable_type, null: false
      t.timestamps
    end
    add_index :listing_joins, [:attributable_id, :attributable_type]
  end
end
