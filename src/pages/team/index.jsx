import React from 'react'

import Layout from '../../components/Layout'
import TeamRoll from '../../components/TeamRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="topper"
        >
          <h1
            className="page-title"
          >
            Meet the Team
          </h1>
          <p>We're an ambitious group of people.</p>
        </div>
        <section className="section">
          
            <div className="content">
              <TeamRoll />
            </div>
          
        </section>
      </Layout>
    )
  }
}
