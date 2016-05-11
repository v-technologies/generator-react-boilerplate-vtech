import React, {PropTypes} from 'react';
import {first} from 'lodash';
import {repositoryShape} from '../types/repository';
import Repository from './Repository';



/**
 *
 */
export default function Organization({repositories}) {
	const name = first(repositories).owner;

	return (
		<article className="Organization">
			<header className="Organization-header">
				<h1 className="Organization-name">
					{name}
				</h1>
			</header>

			<ul className="Organization-repositoryList">
				{repositories.map((repository, i) => (
					<li key={i} className="Organization-repositoryItem">
						<Repository {...repository} />
					</li>
				))}
			</ul>
		</article>
	);
}

Organization.propTypes = {
	repositories: PropTypes.arrayOf(repositoryShape).isRequired
};
