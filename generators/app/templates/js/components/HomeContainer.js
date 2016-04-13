import {connect} from 'react-redux';
import {property} from 'lodash';
import {fetchRepositories} from '../actions/home';
import Home from './Home';



/**
 *
 */
const mapStateToProps = property('home');

/**
 *
 */
const mapDispatchToProps = (dispatch) => ({
	fetchRepositories(organization) {
		dispatch(fetchRepositories(organization));
	}
});



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
