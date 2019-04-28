import React, { Component } from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changedInput } from '../store/actions'

class Input extends Component {
  changedInput = e => {
    const { changedInput, name } = this.props
    changedInput(name, e.target.value)
  }

  render() {
    return (
      <div>
        <FormGroup controlId="formBasicText">
          <FormControl
            disabled={this.props.disabled}
            type={this.props.type || 'Text'}
            placeholder={this.props.controlLabel}
            onChange={this.changedInput}
            value={this.props.val}
          />
        </FormGroup>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changedInput: bindActionCreators(changedInput, dispatch),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Input)
