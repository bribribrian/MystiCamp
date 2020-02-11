json.extract! @booking, :id
json.listing_id @booking.listing_id
json.listing_name @booking.listing_name
json.user_id @booking.user_id
json.start_date @booking.start_date
json.end_date @booking.end_date
json.num_guests @booking.num_guests
json.total_price @booking.total_price
