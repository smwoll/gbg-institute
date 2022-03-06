import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  imageOne,
  imageTwo,
  imageThree,
  description,
  intro,
}) => (
  <div className="index-page">

    <section className="section section--gradient">
        <div className="title">
          <h1>
          <span>Girls </span><br />
          <span>Building </span><br />
          <span>Girls</span>
          </h1>
        </div>
        <div className="images">
          <div className="front-page__columns">
            <div className="description">
              {description}
            </div>

            <div className="column">
              <PreviewCompatibleImage
              imageInfo={{
              image: imageOne,
              alt: `featured image thumbnail for post`,
              }}
              />
              <PreviewCompatibleImage
              imageInfo={{
              image: imageTwo,
              alt: `featured image thumbnail for post`,
              }}
              />
              <PreviewCompatibleImage
              imageInfo={{
              image: imageThree,
              alt: `featured image thumbnail for post`,
              }}
              />
            </div>
          </div>
        </div>
    </section>

    <div className="columns">

                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>

  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imageTwo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imageThree: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout className="front-page-layout">
      <IndexPageTemplate
        imageOne={frontmatter.imageOne}
        imageTwo={frontmatter.imageTwo}
        imageThree={frontmatter.imageThree}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        imageOne {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageThree {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
