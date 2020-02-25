export const fetchUserBookings = (userId) => (
    $.ajax({
        url: `api/bookings`,
        method: "GET",
        data: {userId: userId}
    })
  );

export const createBooking = (booking) => {
    debugger;
    return (
    $.ajax({
        url: `api/bookings`,
        method: 'POST',
        data: {booking},
    })
)};

export const deleteBooking = (bookingId) => (
    $.ajax({
        url: `api/bookings/${bookingId}`,
        type: 'DELETE'
    })
);