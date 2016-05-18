import {PropTypes} from 'react';



/**
 *	Prop types of a repository.
 */
export const repositoryPropTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	owner: PropTypes.string.isRequired
};

/**
 *	Shape of a repository.
 */
export const repositoryShape = PropTypes.shape(repositoryPropTypes);
