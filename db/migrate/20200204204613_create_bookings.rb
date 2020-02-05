class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.string :start_date, null: false
      t.string :end_date, null: false
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
      t.decimal :total_price, null: false
      t.integer :num_guests, null: false

      t.timestamps
    end
    add_index :bookings, :user_id
    add_index :bookings, :listing_id
  end
end
