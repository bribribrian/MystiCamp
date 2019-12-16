import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import  ListingMap from '../listing_map/listing_map';


class ListingShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId);
    }

    render() {
        // const { listing }  = this.props;
        if (!this.props.listing) return (
            <div>problem</div>
        );

        return (
            <div className='listing-show-main'>
                <div>{this.props.listing.title}</div>
                <div>{this.props.listing.description}</div>
                <div> lat/lng: {this.props.listing.lat}/{this.props.listing.lng}</div>
                <ListingMap listingId={this.props.listing.id} fetchListing={this.props.fetchListing}/>
            </div>
        )
    }
}


// const ListingShow = ({ listingId, fetchListing }) => {
//     const listings = {
//         [lisingId]: listing
//     };

//     return(
//         <div>
//            HELLO
//         </div>
//     );

// };

export default withRouter(ListingShow);