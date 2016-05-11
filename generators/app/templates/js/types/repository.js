import {PropTypes} from 'react';



/**
 *
 */
export const repositoryPropTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	owner: PropTypes.string.isRequired
};

/**
 *
 */
export const repositoryShape = PropTypes.shape(repositoryPropTypes);
