import React from 'react';
import './style.scss';
import Helmet from './helmet';
import HeroSlider from './hero-slider';
import SideMenu from './side-menu';
import Navbar from './navbar';
import ListingLove from './listing-love';
import { graphql, StaticQuery } from 'gatsby';
import ArrowRBlack from '../images/arrow-right-black.svg';
import { Link } from 'gatsby';



const LayoutHome = ({ children }) => (
	<div className="columns is-gapless">
		<div className="column side-menu">
			<SideMenu/>
		</div>	
		<div className="column is-rest">	

			<Helmet />
			<section className="hero hero-image is-fullheight">
				<Navbar />
				<HeroSlider/>
			</section>

			<section className="section project-list-title">
				<div className="level featured-heading">
					<div className="level-left">
						<h2 className="is-size-2 level-item">Love Stories & Couples</h2>
					</div>
					<div className="level-right">
						<Link to="/all-love-stories" class="button is-normal level-item">
							ALL LOVE STORIES
								<img className="image see-all" src={ArrowRBlack} alt="Arrow Right" />	
						</Link>
					</div>
				</div>
			</section>
			<StaticQuery query={indexQuery} render = {data => {
				return (
					<section className="section project-thumbnail">
						<div className="columns is-multiline">
								{data.allMarkdownRemark.edges.map(({node}) => (
									<ListingLove 
										title={node.frontmatter.title} 
										author={node.frontmatter.author}
										date={node.frontmatter.date}
										category={node.frontmatter.category}
										path={node.frontmatter.path}
										body={node.excerpt}
									/>
								))}
						</div>
					</section>
					)
				}}/>

		</div>
	</div>
);


const indexQuery = graphql`
    query{
        allMarkdownRemark(limit : 8){
			totalCount
            edges{
                node{
                    id
                    frontmatter{
                    title
                    date
                    author
					category
                    path
                    }
                    excerpt
                }
            }
        }
    }
`


export default LayoutHome;