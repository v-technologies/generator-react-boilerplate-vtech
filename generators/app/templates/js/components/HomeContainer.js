import {connect} from 'react-redux';
import {property} from 'lodash';
import Home from './Home';



/**
 *
 */
const mapStateToProps = property('home');

/**
 *
 */
const mapDispatchToProps = () => ({});



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
