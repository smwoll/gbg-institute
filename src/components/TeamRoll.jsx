import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="team-roll">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="team-roll__item" key={post.id}>
              <article
                className={` ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                  {post.frontmatter.featuredimage ? (
                    <div className="team-roll__image">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : <div className='team-roll__image-placeholder'></div>}

                <div className="team-roll__desciption">
                  <header>
                    <Link
                      className="team-roll__title"
                      to={post.fields.slug}
                    >
                      <h2 className="team-roll__name">
                        {post.frontmatter.title}
                      </h2>
                      
                    </Link>
                  </header>

                  <p>
                  {post.frontmatter.description}
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Learn More
                  </Link>
                  </p>
                </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query TeamRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "team-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
