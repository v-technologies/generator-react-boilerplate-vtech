import React, {PropTypes} from 'react';
import {repositoryShape} from '../api/repositories';
import Repository from './Repository';



/**
 *
 */
export default function Organization({name, repositories}) {
	return (
		<article className="organization">
			<header className="organization-header">
				<h1 className="organization-name">
					{name}
				</h1>
			</header>

			<ul className="organization-repositories">
				{repositories.map((repository, i) => (
					<li key={i} className="organization-repository">
						<Repository {...repository} />
					</li>
				))}
			</ul>
		</article>
	);
}

Organization.propTypes = {
	name: PropTypes.string.isRequired,
	repositories: PropTypes.arrayOf(repositoryShape).isRequired
};
