import React from 'react';
import './style.scss';
import Helmet from './helmet';
import HeroSlider from './hero-slider';
import SideMenu from './side-menu';
import Navbar from './navbar';
import Footer from './footer';
import ReadTheStories from './read-the-stories';
import Subscription from './subscription';
import { graphql, StaticQuery } from 'gatsby';
import ArrowRBlack from '../images/arrow-right-black.svg';
import featured2 from '../images/image-2.png';
import { Link } from 'gatsby';



const LayoutHome = ({ children }) => (
	<div className="columns is-gapless">
		<div className="column side-menu">
			<SideMenu/>
		</div>	
		<div className="column is-rest">	

			<Helmet />
			<nav className="is-hidden-mobile navbar-home">
				<Navbar/>
			</nav>
			<HeroSlider/>

			<section className="section project-list-title">
				<div className="level featured-heading">
					<div className="level-left">
						<h2 className="is-size-2 level-item group-list-title">Recent Works</h2>
					</div>
					<div className="level-right">
						<Link to="/all-love-stories" class="button is-normal level-item">
							ALL PHOTOGRAPHY
								<img className="image see-all" src={ArrowRBlack} alt="Arrow Right" />	
						</Link>
					</div>
				</div>
			</section>

			<section className="section project-thumbnail">
				<div className="columns is-multiline padding-list">
					<div className="column is-5">
						<div className="card-image">
							<div className="image">
								<Link to="/post">
									<img src={featured2} alt=""></img>
								</Link>
							</div>
						</div>
						<div className="card card-content">
							<p className="proj-cat">LOVE STORIES → FOLKS AND FAMILIES</p>
							<p className="proj-title">
								Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
							</p>
							<p className="proj-excerp">Cat ipsum dolor sit amet, scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is..</p>
						</div>
					</div>
					<div className="column is-7">
						<div className="columns is-multiline">
							<div className="column is-6">
								<div className="card-image">
									<div className="image">
										<Link to="/post">
											<img src={featured2} alt=""></img>
										</Link>
									</div>
								</div>
								<div className="card card-content">
									<p className="proj-cat">LOVE STORIES → FOLKS AND FAMILIES</p>
									<p className="proj-title">
										Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
									</p>
								</div>
							</div>
							<div className="column is-6">
								<div className="card-image">
									<div className="image">
										<Link to="/post">
											<img src={featured2} alt=""></img>
										</Link>
									</div>
								</div>
								<div className="card card-content">
									<p className="proj-cat">LOVE STORIES → FOLKS AND FAMILIES</p>
									<p className="proj-title">
										Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
									</p>
								</div>
							</div>
							<div className="column is-6">
								<div className="card-image">
									<div className="image">
										<Link to="/post">
											<img src={featured2} alt=""></img>
										</Link>
									</div>
								</div>
								<div className="card card-content">
									<p className="proj-cat">LOVE STORIES → FOLKS AND FAMILIES</p>
									<p className="proj-title">
										Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
									</p>
								</div>
							</div>
							<div className="column is-6">
								<div className="card-image">
									<div className="image">
										<Link to="/post">
											<img src={featured2} alt=""></img>
										</Link>
									</div>
								</div>
								<div className="card card-content">
									<p className="proj-cat">LOVE STORIES → FOLKS AND FAMILIES</p>
									<p className="proj-title">
										Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section project-list-title">
				<div className="level featured-heading">
					<div className="level-left">
						<h2 className="is-size-2 level-item group-list-title">Read the Stories</h2>
					</div>
				</div>
			</section>
			<StaticQuery query={indexQuery} render = {data => {
				return (
					<section className="section project-thumbnail">
						<div className="columns is-multiline padding-list">
								{data.allMarkdownRemark.edges.map(({node}) => (
									<ReadTheStories 
										title={node.frontmatter.title} 
										author={node.frontmatter.author}
										date={node.frontmatter.date}
										category={node.frontmatter.category}
										path={node.frontmatter.path}
										body={node.excerpt}
									/>
								))}
								<div className="column is-4">
									<div className="see-all-journal">
										<div className="columns">
											<div className="column is-8">
												<div>
													<Link to="/journal-list">See All Journal Entries</Link> 
												</div>
											</div>
											<div className="column is-4">
												<img className="image" src={ArrowRBlack} alt="Arrow Right" />
											</div>
										</div>
									</div>
								</div>
						</div>
					</section>
					)
				}}/>

				<Subscription />
				<Footer />

		</div>
	</div>
);


const indexQuery = graphql`
    query{
        allMarkdownRemark(limit : 5){
			totalCount
            edges{
                node{
                    id
                    frontmatter{
                    title
                    date
                    author
					category
                    }
                    excerpt
                }
            }
        }
    }
`


export default LayoutHome;