/**
 *
 */
export const FETCH_REPOSITORIES = 'FETCH_REPOSITORIES';
export const UPDATE_REPOSITORIES = 'UPDATE_REPOSITORIES';



/**
 *
 */
export const fetchRepositories = (organization) => ({
	type: FETCH_REPOSITORIES,
	payload: {
		organization
	}
});

/**
 *
 */
export const updateRepositories = (repositories) => ({
	type: UPDATE_REPOSITORIES,
	payload: {
		repositories
	}
});
