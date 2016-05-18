/**
 *	Fetches repositories owned by the given organization from
 *	the GitHub API.
 *
 *	@param {string} organization - Organisation name.
 *	@return {Promise} - A promise that resolves with the repositories.
 */
export function fetchByOrganization(organization) {
	return fetch(`https://api.github.com/orgs/${organization}/repos`)
		.then((response) => response.json())
		.then((repositories) =>
			repositories.map((repository) => ({
				name: repository.name,
				url: repository.html_url,
				description: repository.description,
				owner: repository.owner.login
			}))
		);
}
