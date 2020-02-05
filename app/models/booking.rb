class Booking < ApplicationRecord
    validates :start_date, :end_date, :user_id, :listing_id, :num_guests, :total_price, presence: true

    belongs_to :listing
    belongs_to :user

end
