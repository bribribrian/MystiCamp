import React from 'react';
import MarkerManager from '../../util/marker_manager';
import queryString from 'query-string';

class DiscoverMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { lat, lng } = queryString.parse(this.props.location.search);
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lng);
        const mapOptions = {
            center: { lat: latitude, lng: longitude},
            zoom: 13,
            mapTypeId: 'terrain'
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);

        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.listings)
    };

    componentDidUpdate() {
         this.MarkerManager.updateMarkers(this.props.listings);
    };

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter(bounds);
        });
    }

    render() {
        return (
            <div className='discover-map' ref={ map => this.mapNode = map}/>
        );
    };

}

export default DiscoverMap;