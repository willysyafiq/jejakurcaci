import React from 'react';
import './style.scss';
import { Link } from 'gatsby';

import BrandLogo from '../images/logo-black-center.svg';
import SearchBlack from '../images/search-black.svg';
import PinterestBlack from '../images/pinterest-black.svg';
import FacebookBlack from '../images/facebook-black.svg';
import InstagramBlack from '../images/instagram-black.svg';

const Navbar = () => (
	<div>
		<nav className="navbar border-bottom">
			<div className="container">
				<div className="navbar-menu columns is-multiline">
					<div className="column navbar-brand is-5">
					</div>
					<div className="column navbar-mid">
						<Link to="/">
							<img className="image brand-logo" src={BrandLogo} alt="Brand Logo" />	
						</Link>
					</div>
					<div className="navbar-end">
						<span className="navbar-item">
							<a href="#">
								<img className="image search" src={SearchBlack} alt="Search Icon" />	
							</a>
						</span>
					</div>
					<div className="column is-12 second-row">
						<div className="navbar-end">
							<span className="navbar-item">
								<a href="#">
									<img className="image social-logo" src={InstagramBlack} alt="Instagram Icon" />	
								</a>
							</span>
							<span className="navbar-item">
								<a href="#">
									<img className="image social-logo" src={FacebookBlack} alt="Facebook Icon" />
								</a>
							</span>
							<span className="navbar-item">
								<a href="#">
									<img className="image social-logo" src={PinterestBlack} alt="Pinterest Icon" />
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>

		</nav>
	</div>
);

export default Navbar;
