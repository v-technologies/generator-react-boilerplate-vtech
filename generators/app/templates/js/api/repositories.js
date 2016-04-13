import {PropTypes} from 'react';



/**
 *
 */
export const repositoryShape = PropTypes.shape({
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
});



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
				description: repository.description
			}))
		);
}
