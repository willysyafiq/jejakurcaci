import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ArrowLeftBlack from "../images/arrow-left-black.svg"
import ArrowRightBlack from "../images/arrow-right-black.svg"


function HeroSlider() {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: ASC }
          filter: { relativeDirectory: { eq: "hero-images" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )
  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]
  console.log(index)
  console.log(length)
  return (
    <div className="">
        <Img
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, " ").substring(2)}
        className="hero-image"/>
      <div>
        <button onClick={() => handlePrevious()} className="prev-slide"><img src={ArrowLeftBlack} alt="prev"/></button>
        <button onClick={() => handleNext()} className="next-slide"><img src={ArrowRightBlack} alt="next"/></button>
      </div>
    </div>
  )
}


export default HeroSlider;