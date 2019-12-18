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
        let amenitiesList;
        if (this.props.listing.amenities) {
            amenitiesList = this.props.listing.amenities.map((amenity) => <li key={amenity.id}>{amenity.name}</li>)
        }
        let essentialsList;
        if (this.props.listing.essentials) {
            essentialsList = this.props.listing.essentials.map((essential) => <li key={essential.id}>{essential.name}</li>)
        }
        let activitiesList;
        if (this.props.listing.activities) {
            activitiesList = this.props.listing.activities.map((activity) => <li key={activity.id}>{activity.name}</li>)
        }

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
                            <div className='essentials'>
                            <div className='essentials-title'>Essentials</div>
                                <ul className='essentials-list'>
                                    {essentialsList}
                                </ul>
                            </div>
                            <div className='amenities'>
                                <div className='ameities-title'>Amenities</div>
                                <ul className='amenities-list'>
                                    {amenitiesList}
                                </ul>
                            </div>
                        </div>
                        <div className='details-container'>
                            Detials
                        </div>
                        <div className='activities-container'>
                            <div className='activities-title'>Activities</div>
                             <ul className='activities-list'>
                                {activitiesList}
                            </ul>
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