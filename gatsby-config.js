module.exports = {
  plugins: [
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
        title: 'Kong Manager',
        url: 'https://konghq.com/products/kong-manager/',
        description: 'Vue application used to manage your Kong installation'
      },
      {
        title: 'KongHQ',
        url: 'https://konghq.com',
        description: 'Custom built Wordpress site built in less than 3 months'
      },
      {
        title: 'Zooka Creative',
        url: 'http://zooka.agency',
        description: 'Marketing & Case studies for marketing agency'
      },
      {
        title: 'Oojay',
        url: 'http://drinkoojay.com',
        description: 'A small landing page for Oojay Orange Juice'
      },
      {
        title: 'One Hour Innovator',
        url: 'http://onehourinnovator.com',
        description: 'Marketing site for One Hour Innovator app'
      },
      {
        title: 'Renuzit',
        url: 'https://www.renuzit.com',
        description: 'Custom Concrete 5 CMS site'
      },
      {
        title: 'Purex',
        url: 'https://www.purex.com',
        description: 'Custom Wordpress CMS site'
      },
    ]
  },
}
