json.extract! @booking, :id
json.listingId @booking.listing_id
json.user @booking.user
json.listing @booking.listing
json.userId @booking.user_id
json.startDate @booking.start_date
json.endDate @booking.end_date
json.numGuests @booking.num_guests
json.totalPrice @booking.total_price
