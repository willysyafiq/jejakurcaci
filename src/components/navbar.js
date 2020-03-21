import React from 'react';
import { FaSearch, FaBars, FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';

import './style.scss';
// import gatsbyLogo from '../images/gatsby-icon.png';
// import bulmaLogo from '../images/bulma-logo.png';

const Navbar = () => (
	<nav className="is-hidden-mobile">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-menu columns">
					<div className="column navbar-brand">
						<a className="navbar-item" href="#">
							<span className="icon has-text-black center">
								<FaBars size="fa-2x" />
							</span>
						</a>
					</div>
					<div className="column navbar-mid">
						<a href="#">
							<img className="image brand-logo" src="https://via.placeholder.com/160x60" alt="Logo-1" />	
						</a>
					</div>
					<div className="navbar-end">
						<span className="navbar-item">
							<a href="#">
								<span className="icon has-text-black">
									<FaSearch size="fa-2x" />
								</span>
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
								<span className="icon has-text-black">
									<FaInstagram size="fa-2x" />
								</span>
							</a>
						</span>
						<span className="navbar-item">
							<a href="#">
								<span className="icon has-text-black">
									<FaFacebook size="fa-2x" />
								</span>
							</a>
						</span>
						<span className="navbar-item">
							<a href="#">
								<span className="icon has-text-black">
									<FaPinterest size="fa-2x" />
								</span>
							</a>
						</span>
					</div>
				</div>
			</div>
		</nav>
	</nav>
);

export default Navbar;
