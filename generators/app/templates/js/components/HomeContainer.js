import {connect} from 'react-redux';
import Home from './Home';



/**
 *
 */
const mapStateToProps = (state) => ({
	repositories: state.home.repositories
});



/**
 *
 */
export default connect(
	mapStateToProps
)(Home);
