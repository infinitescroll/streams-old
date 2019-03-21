import React, { PureComponent, Fragment } from 'react'
import { Col } from 'react-bootstrap'

import Logo from '../components/Logo'

import '../styles/index.scss'

export default class Home extends PureComponent {
  render() {
    return (
      <Fragment>
        <Col
          lg={{ span: 7, order: -1 }}
          md={12}
          sm={{ order: 12 }}
          className="left-panel"
        >
          <div>
            <h5 className="header">Let's work better.</h5>
            <p className="first-paragraph">
              {"Right now we're working on a "}
              <a
                href="https://github.com/aragon/flock/blob/master/teams/Autark/2019Q1-2.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                {'grant'}
              </a>
              {' from '}
              <a
                href="https://aragon.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aragon
              </a>
              {
                ' to build peer-to-peer storage for their discussion and profile features.'
              }
            </p>
            <div>
              <p className="second-paragraph">
                {
                  "We're also having conversations with researchers of existential threats like AI, climate change, poverty, and aging. If this is you, "
                }
                <a href="mailto:jpschwartz8990@gmail.com">we'd love to chat</a>.
                We're trying to understand how we might help you archive or
                share your work.
              </p>
            </div>
          </div>
          <div className="footer">
            <a
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/openworklabs"
            >
              twitter
            </a>
            <a
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/openworklabs"
            >
              github
            </a>
          </div>
        </Col>
        <Col
          lg={{ span: 5, order: 12 }}
          md={{ span: 12, order: 1 }}
          className="right-panel"
        >
          <Logo />
          <h2>Open Work Labs</h2>
        </Col>
      </Fragment>
    )
  }
}
