import React from 'react';
import './style.scss';
import { Link } from 'gatsby';

import BrandLogo from '../images/logo-center.png';
import SearchBlack from '../images/search-black.svg';
import PinterestBlack from '../images/pinterest-black.svg';
import FacebookBlack from '../images/facebook-black.svg';
import InstagramBlack from '../images/instagram-black.svg';

const Navbar = () => (
	<nav className="is-hidden-mobile">
		<nav className="navbar border-bottom">
			<div className="container">
				<div className="navbar-menu columns">
					<div className="column navbar-brand is-5">
						{/* <a className="navbar-item" href="#">
							<span className="icon has-text-black center">
								<FaBars size="fa-2x" />
							</span>
						</a> */}
					</div>
					<div className="column navbar-mid">
						<Link to="/">
							<img className="image brand-logo" src={BrandLogo} alt="Brand Logo" />	
						</Link>
					</div>
					<div className="navbar-end">
						<span className="navbar-item">
							<a href="#">
								<img className="image brand-logo" src={SearchBlack} alt="Search Icon" />	
							</a>
						</span>
					</div>
				</div>
			</div>

		</nav>
		<nav className="secondrow">
			<div className="container">
				<div className="columns">
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
		</nav>
	</nav>
);

export default Navbar;
