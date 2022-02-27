import React from 'react'

import Layout from '../../components/Layout'
import TeamRoll from '../../components/TeamRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className=""
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className=""
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Meet the Team
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <TeamRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
