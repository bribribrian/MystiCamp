json.extract! @user, :id, :username, :email, :created_at

@user.bookings.each do |booking|
    json.bookings do
        json.set! booking.id do
            json.extract! booking, :id, :user_id, :listing_id, :start_date, :end_date, :num_guests, :total_price
        end 
    end
end