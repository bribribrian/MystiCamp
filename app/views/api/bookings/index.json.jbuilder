@bookings.each do |booking|
    json.set! booking.id do
        json.extract! booking, :id, :user_id, :listing_id, :start_date, :end_date, :num_guests, :total_price
    end 
end