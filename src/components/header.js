import React from 'react';
import { FaGithub, FaBackward, FaLongArrowAltLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import './style.scss';

import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero hero-image is-fullheight">
		<Navbar />
		<div className="hero hero-body">
			<div className="container" id="hero-bottom">
				<div className="columns level">
					<div className="column level-left">
							<div className="columns is-vcentered">
								<div className="column is-narrow hero-back">
									<span className="icon has-text-black">
										<FaArrowLeft size="fa-2x" />
									</span>
								</div>
								<div className="column">
									<h1 className="hero-title has-text-black">
										Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
									</h1>
								</div>
						</div>
					</div>
					<div className="column level-right">
						<div className="columns right is-vcentered">
							<div className="column is-one-quarter hero-back">
								<span className="icon has-text-black">
									<FaArrowRight size="fa-2x" />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Header;
