import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchLocation: ''
        }
    
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToListingIndex = this.navigateToListingIndex.bind(this);
    }

    componentDidMount() {
        let searchBarInput = document.getElementById('search-bar-input');
        let autoComplete = new google.maps.places.Autocomplete(searchBarInput);

        let searchLocation;
        let that = this;

        autoComplete.addListener('place_changed', () => {
            let address = autoComplete.getPlace().formatted_address;
            searchLocation = address ? address : autoComplete.getPlace().name
            that.setState({
                searchLocation: searchLocation
            });
        });
    };

    handleInput(e) {
        this.setState({
            searchLocation: e.target.value
        });
    };

    navigateToListingIndex(data) {
        this.props.history.push({
            pathname: '/discover',
            search: `?lat=${data[0][0]}&lng=${data[0][1]}`
        });
    };

    handleSubmit(e) {
        e.preventDefault();

        function findGeocode(location) {
            return new Promise(function(resolve, reject) {
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'address': location}, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        // lat = results[0].geometry.location.lat();
                        // lng = results[0].geometry.location.lng();
                        resolve([results[0].geometry.location.lat(), results[0].geometry.location.lng()]);
                    } else {
                        reject(new Error('location error'));
                        console.log('location error');
                    };
                });
            });
        }
        
        function processGeocode (location, inputFunction) {
            let latLng = [];
            for(let i = 0; i < 1; i++) {
                latLng.push(inputFunction(location))
            }
            return latLng;
        };

        let locationData = processGeocode(this.state.searchLocation, findGeocode);
        Promise.all(locationData)
        .then((returnData) => { this.navigateToListingIndex(returnData);
        })
        
        this.props.receiveLocation(this.state);
        // this.navigateToListingIndex(lat, lng);
    };

    render() {
        return (
            <form className='search-bar-container' onSubmit={this.handleSubmit}>
                <div className='search-bar-input-container'>
                    <input className='search-bar-input' id='search-bar-input' type='search' placeholder='Search...' value={this.state.searchLocation} onChange={this.handleInput} />
                </div>
                <button className='search-bar-button'>Search</button>
            </form>
        )
    }
}

export default withRouter(SearchBar);