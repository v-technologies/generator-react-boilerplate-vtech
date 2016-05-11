import React from 'react';
import {mount} from 'enzyme';
import Repository from '<%= props.projectName %>/components/Repository';



/**
 *
 */
describe('Repository', function() {

	/**
	 *
	 */
	it('should render name and description', function() {
		const name = 'name';
		const url = 'http://example.com';
		const description = 'description';

		const repository = mount(
			<Repository
				name={name}
				url={url}
				description={description}
			/>
		);

		expect(repository.find('.Repository-name').text()).to.equal(name);
		expect(repository.find('.Repository-description').text()).to.equal(description);
	});
});
