import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const coordinateObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});



class ListingMap extends React.Component {

    componentDidMount() {
        // debugger;
        // const map = this.refs.map;
        // this.map = new google.maps.Map(map, mapOptions);
        // // this.MarkerManager = new this.MarkerManager(this.map, this.handleMarkerClick.bind(this));
        // this.props.fetchListing(this.props.match.params.listingId);
        // debugger;


        // const mapOptions = {
        //     center: { lat: 37.7758, lng: -122.435 },
        //     zoom: 13
        //   };

        //   this.map = new google.maps.Map(this.mapNode, mapOptions);

        const mapOptions = {
            center: {
                lat: 40.6892,
                lng: -74.0445
            },
            zoom: 13  
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        
    }

    // componentDidUpdate() {
    //     // const targetListingKey = Object.keys(this.props.listings)[0];
    //     debugger;
    //     // const targetListing = this.props.listings[targetListingKey];
    //     const targetListing = this.props.listings[this.props.match.params.listingId];
    //     // this.MarkerManager.updateMarkers([targetListing]);
    // }

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
            // <div className='map-container' ref='map'>
            //     Map 
            // </div>
            <div className='map-container' ref={ map => this.mapNode = map } /> 
            

        );
    }
}

export default withRouter(ListingMap);