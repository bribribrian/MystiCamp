export const fetchListings = () => (
    $.ajax({
        url: 'api/listings',
        method: 'GET',
    })
);

export const fetchListing = (lisitngId) => (
    $.ajax({
        url: `api/listings/${listingId}`,
        method: 'GET'
    })
);