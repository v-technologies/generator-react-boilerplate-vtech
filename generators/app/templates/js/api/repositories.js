/**
 *
 */
export function fetchByOrganization(name) {
	return fetch(`https://api.github.com/orgs/${name}/repos`)
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
