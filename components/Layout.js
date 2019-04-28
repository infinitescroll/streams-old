import React, { PureComponent } from 'react'

import '../styles/layout.scss'

export default class Layout extends PureComponent {
  render() {
    return <div className="page">{this.props.children}</div>
  }
}
