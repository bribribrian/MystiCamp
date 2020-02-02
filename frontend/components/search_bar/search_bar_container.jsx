import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { receiveLocation } from '../../actions/map_actions'

const mapDispatchToProps = (dispatch) => ({
    receiveLocation: (location) => dispatch(receiveLocation(location))
});

export default connect(null, mapDispatchToProps)(SearchBar);