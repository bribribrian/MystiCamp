import { connect } from 'react-redux';
import Discover from './discover';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        listings: Object.values(state.entities.listings),
        location: ownProps.location
    };
};

const mapDispatchToProps = dispatch => ({
    updateFilter: (bounds) => dispatch(updateFilter(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);