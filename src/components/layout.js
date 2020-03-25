import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import ProjectListing from './project-listing';
import Footer from './footer';
import SideMenu from './side-menu';

const Layout = ({ children }) => (
	<div className="columns is-gapless">
		<div className="column side-menu">
			<SideMenu/>
		</div>	
		<div className="column is-rest">	

			<Helmet />
			<Header />
			<ProjectListing/>
			{/* <Footer /> */}
		</div>
	</div>
);

export default Layout;
