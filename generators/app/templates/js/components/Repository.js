import React, {PropTypes} from 'react';



/**
 *
 */
export default function Repository({name, url, description}) {
	return (
		<article className="repository">
			<header className="repository-header">
				<h2 className="repository-name">
					<a href={url} title={`${name} on GitHub`}>
						{name}
					</a>
				</h2>
			</header>

			<p className="repository-description">
				{description}
			</p>
		</article>
	);
}

Repository.propTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};
