import React from 'react'

import './ProjectCard.scss'

class ProjectCard extends React.Component {

  render() {
    return (
      <article
        className="card"
        key={this.props.url}>
        {this.props.url &&
          <a className="card-link" href={this.props.url}></a>
        }
        <h3 className="card-title">{this.props.title}</h3>
        <small>{this.props.url}</small>
        <p className="card-content">{this.props.description} </p>
      </article>
    )
  }
}

export default ProjectCard
