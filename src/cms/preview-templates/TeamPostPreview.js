import React from 'react'
import PropTypes from 'prop-types'
import { TeamPostTemplate } from '../../templates/team-post'

const TeamPostPreview = ({ entry, widgetFor }) => {
  return (
    <TeamPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

TeamPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TeamPostPreview
