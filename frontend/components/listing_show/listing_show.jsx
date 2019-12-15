import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


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
            <div>
                <div>{this.props.listing.title}</div>
                <div>{this.props.listing.description}</div>
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