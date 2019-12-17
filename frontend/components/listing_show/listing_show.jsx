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
        if (!this.props.listing) return (
            <div>problem</div>
        );

        return (
            <div className='listing-show-main'>
                <img className='show-image' src={window[this.props.listing.thumbnail]}/>
                <div className='show-properties'>
                    <div className='show-properties-right'>
                        <div className='show-properties-header'>
                            <div className='show-title'>{this.props.listing.title}</div>
                        </div>
                        <div className='description-container'>
                            <div className='description-host'>Hosted by</div>
                            <div className='show-description'>{this.props.listing.description}</div>
                        </div>
                        <div className='attributes-container'>
                            <div className='lodging'>Lodging provided</div>
                            <div className='essentials'>Essentials</div>
                            <div className='amenities'>Amenities</div>
                        </div>
                        <div className='details-container'>
                            Detials
                        </div>
                        <div className='activities-container'>
                            Activities
                        </div>
                        <div className='terrain-container'>
                            Terrain
                        </div>
                        <div className='vibe-container'>
                            Vibe
                        </div>
                    </div>
                    <div className='aside-container'>
                        <div className='cost-container'>
                            <div className='cost'>$Cost</div>
                            <div className='per-night'>per night</div>
                        </div>
                </div>
                </div>
                <ListingMap listingId={this.props.listing.id} listing={this.props.listing} fetchListing={this.props.fetchListing}/>
            </div>
        )
    }
}

export default withRouter(ListingShow);