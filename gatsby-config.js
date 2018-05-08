module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-41294706-1",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Gothic\+A1\:400,600,700, 900` // you can also specify font weights and styles
        ]
      }
    }
  ],
  siteMetadata: {
    pathPrefix: "",
    siteUrl: "http://travisamaral.com",
    title: "Travis Amaral - Front-End Developer located in San Jose, CA",
    author: "Travis Amaral",
    description:
      "Travis Amaral is a front-end developer with a focus on building fast, readable, and responsive UI's based out of San Jose, CA.",
    social: {
      codepen: "https://codepen.io/travispamaral",
      linkedin: "https://linkedin.com/in/travispamaral",
      github: "https://www.github.com/travispamaral"
    },
    projects: [
      {
        title: 'proj 1',
        url: 'project.com',
        description: 'Some description'
      },
      {
        title: 'proj 2',
        url: 'project2.com',
        description: 'Some description'
      },
      {
        title: 'proj 3',
        url: 'project3.com',
        description: 'Some description'
      },
      {
        title: 'proj 4',
        url: 'project4.com',
        description: 'Some description'
      },
    ]
  },
}
