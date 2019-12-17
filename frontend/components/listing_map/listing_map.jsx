import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

// const coordinateObj = latLng => ({
//     lat: latLng.lat(),
//     lng: latLng.lng()
// });



class ListingMap extends React.Component {

    componentDidMount() {
        
        // const map = this.refs.map;
        // this.map = new google.maps.Map(map, mapOptions);
        // this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        // this.props.fetchListing(this.props.match.params.listingId);
        // if (this.props.singleListing) {
            // this.props.fetchListing(this.props.listingId);
        // } else {
        //     this.registerListeners();
        //     this.MarkerManager.updateMarkers(this.props.listings);
        // }
        // this.map = new google.maps.Map(this.mapNode, mapOptions);
        const mapOptions = {
            
            center: {
                lat: this.props.listing.lat,
                lng: this.props.listing.lng
            },
            zoom: 13  
        }
        let center = {
            lat: this.props.listing.lat,
            lng: this.props.listing.lng
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions);

        const circle = new google.maps.Circle({
            strokeColor: '51D9AC',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillColor: '#71DBB4',
            fillOpacity: 0.35,
            map: this.map,
            center: center,
            radius: 1800

        })

        
    }

    // componentDidUpdate() {
    //     if (this.props.singleListing) {
    //     const targetListingKey = Object.keys(this.props.listings)[0];
    //     const targetListing = this.props.listings[targetListingKey];
    //     // const targetListing = this.props.listings[this.props.match.params.listingId];
    //     this.MarkerManager.updateMarkers([targetListing]);
    //     } else {
    //         this.MarkerManager.updateMarkers(this.props.listings);
    //     }
    // }

    // registerListeners() {
    //     google.maps.event.addListener(this.map, 'idle', () => {
    //       const { north, south, east, west } = this.map.getBounds().toJSON();
    //       const bounds = {
    //         northEast: { lat:north, lng: east },
    //         southWest: { lat: south, lng: west } };
    //       this.props.updateFilter('bounds', bounds);
    //     });
    //     google.maps.event.addListener(this.map, 'click', (event) => {
    //       const coords = coordinateObj(event.latLng);
    //       this.handleClick(coords);
    //     });
    //   }





    // handleMarkerClick(listing) {
    //     this.props.history.push(`listings/${listing.id}`)
    // }

    // handleClick(coords) {
    //     this.props.history.push({
    //         pathname: 'listings/new',
    //         search: `lat=${coords.lat}&lng=${coords.lng}`
    //     });
    // }

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