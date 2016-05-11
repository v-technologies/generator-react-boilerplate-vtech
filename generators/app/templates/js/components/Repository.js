import React from 'react';
import {repositoryPropTypes} from '../types/repository';



/**
 *
 */
export default function Repository({name, url, description}) {
	return (
		<article className="Repository">
			<header className="Repository-header">
				<h2 className="Repository-name">
					<a href={url} title={`${name} on GitHub`}>
						{name}
					</a>
				</h2>
			</header>

			<p className="Repository-description">
				{description}
			</p>
		</article>
	);
}

Repository.propTypes = repositoryPropTypes;
