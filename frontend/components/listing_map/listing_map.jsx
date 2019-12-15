import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../.../util/marker_manager';

const coordinateObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});

const mapOptions = {
    center: {
        lat: 40.6892,
        lng: 74.0445
    },
    zoom: 13
}

class ListingMap extends React.Component {

    componentDidMount() {
        const map = this.refs.map;
        this.map = google.maps.Map(map, mapOptions);
        this.MarkerManager = new this.MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.props.fetchListing(this.props.listingId);
    }

    componentDidUpdate() {
        const targetListingKey = Object.keys(this.props.listings)[0];
        const targetListing = this.props.listings[targetListingKey];
        this.MarkerManager.updateMarkers([targetListing]);
    }

    handleMarkerClick(listing) {
        this.props.history.push(`listings/${listing.id}`)
    }

    handleClick(coords) {
        this.props.history.push({
            pathname: 'listings/new',
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }

    render() {
        return (
            <div className='map' ref='map'>
                Map 
            </div>

        );
    }
}

export default withRouter(ListingMap);