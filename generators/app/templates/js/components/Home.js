import React, {PropTypes} from 'react';
import {intlShape} from 'react-intl';
import Helmet from 'react-helmet';
import {repositoryShape} from '../types/repository';
import Organization from './Organization';
import renderIf from 'render-if';



/**
 *
 */
export default function Home({repositories}, {intl}) {
	return (
		<div>
			<Helmet
				title={intl.formatMessage({
					id: 'page.home.title'
				})}
			/>

			{renderIf(repositories.length)(() => (
				<Organization repositories={repositories} />
			))}
		</div>
	);
}

Home.contextTypes = {
	intl: intlShape
};

Home.propTypes = {
	repositories: PropTypes.arrayOf(repositoryShape)
};
