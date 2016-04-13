import React, {Component, PropTypes} from 'react';
import {repositoryShape} from '../api/repositories';
import Organization from './Organization';



/**
 *
 */
export default class Home extends Component {

	static propTypes = {
		organization: PropTypes.string.isRequired,
		fetchRepositories: PropTypes.func.isRequired,
		repositories: PropTypes.arrayOf(repositoryShape)
	};

	componentDidMount() {
		const {organization, fetchRepositories} = this.props;
		fetchRepositories(organization);
	}

	render() {
		const {organization, repositories} = this.props;

		return repositories
			? <Organization name={organization} repositories={repositories} />
			: <noscript />;
	}
}
