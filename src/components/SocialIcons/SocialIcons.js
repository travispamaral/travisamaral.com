import React from 'react';

import IconGithub from '-!svg-react-loader?name=Icon!../../../assets/social/github.svg'
import IconLinkedIn from '-!svg-react-loader?name=Icon!../../../assets/social/linkedin.svg'
import IconCodepen from '-!svg-react-loader?name=Icon!../../../assets/social/codepen.svg'

import './SocialIcons.scss'

import config from '../../../gatsby-config.js'

class SocialIcons extends React.Component {
  render() {

    let target = this.props.newTab ? '_blank' : '_self';

    //-- Set default link values.
    let links = {
      codepen: config.siteMetadata.social.codepen,
      github: config.siteMetadata.social.github,
      linkedin: config.siteMetadata.social.linkedin
    }

    return (
      <ul className="SocialIcons">
        {this.props.github &&
          <li className="SocialIcons-icon">
            <a target={target} href={links.github}>
              <IconGithub />
            </a>
          </li>
        }

        {this.props.codepen &&
          <li className="SocialIcons-icon">
            <a target={target} href={links.codepen}>
              <IconCodepen />
            </a>
          </li>
        }

        {this.props.linkedin &&
          <li className="SocialIcons-icon">
            <a target={target} href={links.linkedin}>
              <IconLinkedIn />
            </a>
          </li>
        }
      </ul>
    )
  }
}

SocialIcons.defaultProps = {
  codepen: true,
  github: true,
  linkedin: true,
}

export default SocialIcons;
