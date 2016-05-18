import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import routes from './routes';
import store from './store';
import messages from './messages/en';



/**
 *	Registers the default locale for react-intl.
 */
addLocaleData(en);



/**
 *	Wraps the application with data and intl providers.
 */
const app = (
	<Provider store={store}>
		<IntlProvider locale="en" messages={messages}>
			{routes}
		</IntlProvider>
	</Provider>
);



/**
 *	Renders the application on #app.
 */
render(app, document.getElementById('app'));
