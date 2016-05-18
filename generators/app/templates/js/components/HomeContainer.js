import {connect} from 'react-redux';
import Home from './Home';



/**
 *	Maps the state of the store to props for the child component.
 *
 *	@param {object} state - Data from the store.
 *	@return {object} - Props.
 */
const mapStateToProps = (state) => ({
	repositories: state.home.repositories
});



/**
 *	Builds a container for the Home component.
 */
export default connect(
	mapStateToProps
)(Home);
