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
  cta,
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

              <p>
                {description}
              </p>

              {cta && (
                <p>
                <Link className="button" to={cta.link}>
                {cta.text}
              </Link>  
                </p>
              
            )}
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
  description: PropTypes.string,
  cta: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
  }),
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
        description={frontmatter.description}
        cta={frontmatter.cta}
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
        description
        cta {
          text
          link
        }
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
