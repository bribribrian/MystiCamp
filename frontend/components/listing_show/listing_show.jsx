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

    // <i class="fas fa-campground"></i>
    // <i class="fas fa-home"></i>

    render() {
        if (!this.props.listing) return (
            <div>problem</div>
        );

        const amenityIconFunction = (amenity_name) => {
            let amenity_icon;
            if (amenity_name === 'Wifi') {
                amenity_icon = <i className="fas fa-wifi"></i>;
            } else if (amenity_name === 'Showers') {
                amenity_icon = <i className="fas fa-shower"></i>;
            } else {
                amenity_icon = <i className="fas fa-certificate"></i>;
            }
            return amenity_icon
        };

        const activityIconFunction = (activity_name) => {
            let activity_icon;
            if (activity_name === 'Swimming') {
                activity_icon = <i className="fas fa-swimmer"></i>;
            } else if (activity_name === 'Fishing') {
                activity_icon = <i className="fas fa-fish"></i>;
            } else {
                activity_icon = <i className="fas fa-certificate"></i>;
            }
            return activity_icon
        };

        const essentialIconFunction = (essential_name) => {
            let essential_icon;
            if (essential_name === 'Campfires') {
                essential_icon = <i className="fas fa-fire-alt"></i>
            } else if (essential_name === 'Toilets') {
                essential_icon = <i className="fas fa-toilet"></i>
            } else {
                essential_icon = <i className="fas fa-certificate"></i>;
            }
            return essential_icon
        };

        const terrainIconFunction = (terrain_name) => {
            let terrain_icon;
            if (terrain_name === 'Waterfall') {
                terrain_icon = <i className="fas fa-water"></i>
            } else if (terrain_name === 'Forest') {
                terrain_icon = <i className="fas fa-tree"></i>
            } else {
                terrain_icon = <i className="fas fa-certificate"></i>;
            }
            return terrain_icon
        };

        let amenitiesList;
        if (this.props.listing.amenities) {
            amenitiesList = this.props.listing.amenities.map((amenity) => <li key={amenity.id}>{amenityIconFunction(amenity.name)} {amenity.name} available</li>)
        };

        let essentialsList;
        if (this.props.listing.essentials) {
            essentialsList = this.props.listing.essentials.map((essential) => <li key={essential.id}>{essentialIconFunction(essential.name)} {essential.name}</li>)
        };

        let activitiesList;
        if (this.props.listing.activities) {
            activitiesList = this.props.listing.activities.map((activity) => <li key={activity.id}>{activityIconFunction(activity.name)} {activity.name}</li>)
        };

        let terrainsList;
        if (this.props.listing.terrains) {
            terrainsList = this.props.listing.terrains.map((terrain) => <li key={terrain.id}>{terrainIconFunction(terrain.name)} {terrain.name}</li>)
        };

        let logding_icon;
        if (this.props.listing.lodging === 'Tent') {
            logding_icon = <i className="fas fa-campground"></i>
        } else if (this.props.listing.lodging === 'Cabin') {
            logding_icon = <i className="fas fa-home"></i>
        } else {
            logding_icon = <i className="fas fa-certificate"></i>
        };

        const hostName = (listing) => {
            if (listing.host) {
            return (listing.host.f_name).concat(' ').concat(listing.host.l_name.charAt(0).concat('.'))
            } else {
                return null;
            }
        };
       

        // <i class="fas fa-map-marker-alt"></i>
        // <i class="fas fa-user-friends"></i>


        return (
            <div className='listing-show-main'>
                <img className='show-image' src={window[this.props.listing.thumbnail]}/>
                <div className='show-properties'>
                    <div className='show-properties-right'>
                        <div className='show-properties-header'>
                            <div className='show-title'>{this.props.listing.title}</div>
                        </div>
                        <div className='description-container'>
                            <div className='host-container'>
                                <i className="far fa-user"></i>
                                <div className='host-text'>
                                    <div className='description-host'>Hosted by</div>
                                    <div className='host-name'>{hostName(this.props.listing)}</div>
                                </div>
                            </div>
                            <div className='show-description'>{this.props.listing.description}</div>
                        </div>
                        <div className='attributes-container'>
                            <div className='lodging'>
                            <div className='lodging-title'>Lodging Provided</div>
                                <ul className='lodging-list'>
                                    <li> 
                                        <div className='lodging-icon'>{logding_icon}</div>
                                        <div className='lodging-number'>{this.props.listing.lodging}</div>
                                    </li>
                                    <li> 
                                        <div className='num-sites-icon'><i className="fas fa-map-marker-alt"></i></div>  
                                        <div className='num-sites-number'>{this.props.listing.num_sites} sites</div>
                                    </li>
                                    <li>
                                        <div className='max-guests-icon'><i className="fas fa-user-friends"></i></div>
                                        <div className='max-guests-number'>Up to {this.props.listing.max_guests} guests per site.</div>
                                    </li>
                                </ul>
                            </div>
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
                            <div className='details-title'>Detials</div>
                            <div className='details-column-one'>
                                <div className='details-checkin'><span className='detail-title'>Check in:</span>After 4PM</div>
                                <div className='details-checkout'><span className='detail-title'>Check out:</span>Before 11AM</div>
                                <div className='details-cancellation'><span className='detail-title'>Cancellation policy:</span>Moderate</div>
                                <div className='details-response'><span className='detail-title'>Response time:</span>Within 12 hours</div>
                            </div>
                            <div className='details-column-two'>
                                <div className='details-arrival'><span className='detail-title'>On arrival:</span>Go stright to camp</div>
                                <div className='details-minimum'><span className='detail-title'>Minimum nights:</span>1 night</div>
                                <div className='details-accepts'><span className='detail-title'>Accepts bookings:</span>12 months out</div>
                                <div className='details-weeknight'><span className='detail-title'>Weeknight discount:</span>10% off</div>
                            </div>
                        </div>
                        <div className='activities-container'>
                            <div className='activities-titles'>
                                <div className='activities-title'>Activities</div>
                                <div className='activities-subtitle'>Offered on the Host's property or nearby</div>
                            </div>
                            <div className='activities-ul-container'>
                                <ul className='activities-list'>
                                    {activitiesList}
                                </ul>
                            </div>
                        </div>
                        <div className='terrains-container'>
                            <div className='terrains-title'>Terrain</div>
                            <div className='terrains-subtitle'>Natural features you'll find nearby</div>
                                <ul className='terrains-list'>
                                    {terrainsList}
                                </ul>
                        </div>
                        <div className='vibe-container'>
                            <div className='vibe-title'>The vibe at {this.props.listing.title}</div>
                            <div className='vibes-container'>
                                <div className='elevation-container'>
                                    <div className='vibes-title'>26ft</div>
                                    <div className='vibes-body'>Listing's elevation</div>
                                </div>
                                <div className='temperature-container'>
                                    <div className='vibes-title'>20°F</div>
                                    <div className='vibes-body'>Clear today</div>
                                </div>
                                <div className='distance-container'>
                                    <div className='vibes-title'>1.5</div>
                                    <div className='vibes-body'>Away, as the crow flies</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='aside-container'>
                        <div className='cost-container'>
                            <div className='cost'><i className="fas fa-dollar-sign"></i>{this.props.listing.cost}</div>
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