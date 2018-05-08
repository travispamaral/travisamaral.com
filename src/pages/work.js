import React, { Component } from 'react'

import ProjectCard from '../components/ProjectCard/ProjectCard'
import Header from '../components/Header/Header'
import RightSlice from '../components/Slice/RightSlice'
import Footer from '../components/Footer/Footer'

export default ({ data }) => {

  const projects = data.site.siteMetadata.projects
  
  return (
    <div className="content work-page">
      <Header />  

      <h1>Projects</h1>
      <p>some text or something</p>
      <div
        className="projects-wrapper"  
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat( auto-fit, minmax( 300px, auto ) )',
          gridGap: '15px',
          marginTop: '5rem'
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
      <Footer />
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
