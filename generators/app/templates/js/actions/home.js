/**
 *	Action types.
 */
export const FETCH_REPOSITORIES = 'home/FETCH_REPOSITORIES';
export const UPDATE_REPOSITORIES = 'home/UPDATE_REPOSITORIES';



/**
 *	Returns an action of type FETCH_REPOSITORIES, that tells
 *	the app to fetch repositories from the given organization.
 *
 *	@param {string} organization - Organisation name.
 *	@return {object} - Action.
 */
export const fetchRepositories = (organization) => ({
	type: FETCH_REPOSITORIES,
	payload: {
		organization
	}
});

/**
 *	Returns an action of type UPDATE_REPOSITORIES, that tells
 *	the app to update repositories in the store.
 *
 *	@param {array} repositories - Repositories.
 *	@return {object} - Action.
 */
export const updateRepositories = (repositories) => ({
	type: UPDATE_REPOSITORIES,
	payload: {
		repositories
	}
});
