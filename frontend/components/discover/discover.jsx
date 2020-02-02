import React from 'react';
import DiscoverIndex from './discover_index';
import DiscoverMap from './discover_map';

const Discover = (props) => {

    return (
        <div className='discover-container'>
            <div className='discover-main'>
                <div className='discover-mid'>
                    <div className='discover-index-container'><DiscoverIndex listings={props.listings} /></div>
                    <div className='discover-map-container'>
                        <DiscoverMap listings={props.listings} location={props.location} updateFilter={props.updateFilter} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Discover;