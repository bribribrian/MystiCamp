class MarkerManager {
    constructor(map, handleClick){
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(listings){
        const listingsObj = {};
        listings.forEach(listing => listingsObj[listing.id] = listing);

        listings
            .filter(listing => !this.markers[listing.id])
            .forEach(newListing => this.createMarkerFromListing(newListing, this.handleClick))

        Object.keys(this.markers)
            .filter(listingId => !listingsObj[listingId])
            .forEach((listingId) => this.removeMarker(this.markers[listingId]))
    }

    createMarkerFromListing(listing) {
        const position = new google.map.Latlng(listing.lat, listing.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            listingId: listing.id
        });

        marker.addListener('click', () => this.handleClick(listing));
        this.markers[marker.listingId] = marker;
    }
}

export default MarkerManager;
