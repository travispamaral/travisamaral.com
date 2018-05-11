import React, { Component } from 'react'

import ProjectCard from '../components/ProjectCard/ProjectCard'
import Header from '../components/Header/Header'
import RightSlice from '../components/Slice/RightSlice'

export default ({ data }) => {

  const projects = data.site.siteMetadata.projects
  
  return (
    <div className="content work-page">
      <Header />  

      <h1>Projects</h1>
      <p>Checkout some of my most recent work. Note that not all projects are listed here.</p>
      <div
        className="projects-wrapper"  
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat( auto-fit, minmax( 300px, auto ) )',
          gridGap: '16px',
          marginTop: '2rem'
        }}
      >
        {projects.map((project, i) =>
          <ProjectCard
            key={project.url}
            title={project.title}
            url={project.url}
            date={project.data}
            description={project.description}
          />
        )}
      </div>
      <RightSlice />
    </div>
  )
}

export const projectQuery = graphql`
  query ProjectQuery {
    site {
      siteMetadata {
        projects {
          title
          url
          description
        }
      }
    }
  }
`
