export const fetchListings = (data) => (
    $.ajax({
        url: 'api/listings',
        method: 'GET',
        data
    })
);

export const fetchListing = (listingId) => {
    return (
    $.ajax({
        url: `api/listings/${listingId}`,
        method: 'GET'
    })
    )
};
