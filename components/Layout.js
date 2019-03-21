import React, { PureComponent } from 'react'
import { Row } from 'react-bootstrap'

import '../styles/layout.scss'

export default class Layout extends PureComponent {
  render() {
    return (
      <div className="page">
        <Row className="custom-container">{this.props.children}</Row>
      </div>
    )
  }
}
