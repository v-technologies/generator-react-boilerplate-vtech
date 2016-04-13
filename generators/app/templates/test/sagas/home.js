import {call, put} from 'redux-saga/effects';
import {fetchByOrganization} from '<%= props.projectName %>/api/repositories';
import {fetchRepositories, updateRepositories} from '<%= props.projectName %>/actions/home';
import {fetchRepositoriesWorker} from '<%= props.projectName %>/sagas/home';



/**
 *
 */
describe('home sagas', function() {

	describe('fetchRepositoriesWorker', function() {

		/**
		 *
		 */
		it('should fetch and update the repositories', function() {
			const organisation = 'organisation';
			const name = 'name';
			const repositories = [
				{
					name: 'repository',
					url: 'http://example.com',
					name: 'Description.'
				}
			];

			const action = fetchRepositories(organisation);
			const gen = fetchRepositoriesWorker(action);
			const first = gen.next();

			expect(first.value).to.deep.equal(
				call(fetchByOrganization, organisation)
			);

			const second = gen.next(repositories);

			expect(second.value).to.deep.equal(
				put(updateRepositories(repositories))
			);
		});
	});
});
