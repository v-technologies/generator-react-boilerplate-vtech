import {UPDATE_REPOSITORIES, updateRepositories} from '<%= props.projectName %>/actions/home';
import reducer from '<%= props.projectName %>/reducers/home';



/**
 *
 */
describe('home reducer', function() {

	/**
	 *
	 */
	it(UPDATE_REPOSITORIES, function() {
		const repositories = {};
		const newRepositories = [
			{
				name: 'repository',
				url: 'http://example.com',
				name: 'Description.'
			}
		];

		const state = {
			repositories
		};

		const action = updateRepositories(newRepositories);
		const newState = reducer(state, action);

		expect(newState).to.deep.equal({
			repositories: newRepositories
		});
	});
});
