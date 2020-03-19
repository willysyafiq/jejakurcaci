import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import ProjectListing from './project-listing';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		<ProjectListing/>
		<Footer />
	</div>
);

export default Layout;
