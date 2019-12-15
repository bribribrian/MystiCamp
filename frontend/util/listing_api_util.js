export const fetchListings = () => (
    $.ajax({
        url: 'api/listings',
        method: 'GET',
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